import React, {
  createContext,
  useContext,
  useReducer,
  ReactElement,
} from 'react';

import { darkTheme, lightTheme } from './themes';

export const DARK = 'DARK';
export const LIGHT = 'LIGHT';

interface TypeThemeInitialState {
  theme: 'DARK' | 'LIGHT';
}

export const themeInitialState: TypeThemeInitialState = {
  theme: LIGHT,
};

export const TOGGLE_THEME = 'TOGGLE_THEME';

export interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

type ThemeActionTypes = ToggleThemeAction;

type Dispatch = (action: ThemeActionTypes) => void;

const TSContext = createContext<TypeThemeInitialState>(themeInitialState);
const ThemeDispatchContext = createContext<Dispatch | undefined>(undefined);

function themeReducer(
  state: TypeThemeInitialState = themeInitialState,
  action: ThemeActionTypes
): TypeThemeInitialState {
  switch (action.type) {
    case TOGGLE_THEME:
      const html = document.querySelector('html');
      if (state.theme === DARK) {
        html?.classList.remove('dark');
      } else {
        html?.classList.add('dark');
      }
      return {
        theme: state.theme === LIGHT ? DARK : LIGHT,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export function useTheme() {
  const context = useContext(TSContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const { theme } = context;

  return {
    theme: theme === LIGHT ? lightTheme : darkTheme,
    mode: theme,
  };
}

export function useThemeDispatch() {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }

  const dispatch = context;

  const toggleTheme = () => dispatch({ type: TOGGLE_THEME });

  return { toggleTheme };
}

interface ThemeProviderPropTypes {
  children: JSX.Element | ReactElement;
}

export default function ThemeProvider({ children }: ThemeProviderPropTypes) {
  const [state, dispatch] = useReducer(themeReducer, themeInitialState);

  return (
    <TSContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </TSContext.Provider>
  );
}
