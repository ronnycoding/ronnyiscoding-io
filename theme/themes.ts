const tailwind = require('../tailwind.config');

export type themeTypes = {
  bg: string;
  textColor: string;
  circleAnimated: string;
  sideMenuBarColor: string;
  primary: string;
  navbar: string;
};

export const darkTheme: themeTypes = {
  bg: 'bg-gray-darkTheme',
  textColor: 'text-gray-lightTheme',
  circleAnimated: tailwind.theme.colors.blue.night,
  sideMenuBarColor: tailwind.theme.colors.white,
  primary: tailwind.theme.colors.blue.night,
  navbar: tailwind.theme.colors.gray.darkTheme
};

export const lightTheme: themeTypes = {
  bg: 'bg-gray-lightTheme',
  textColor: 'text-gray-darkTheme',
  circleAnimated: tailwind.theme.colors.red.moon,
  sideMenuBarColor: tailwind.theme.colors.gray.darkTheme,
  primary: tailwind.theme.colors.cinnabar,
  navbar: tailwind.theme.colors.gray.lightTheme
};
