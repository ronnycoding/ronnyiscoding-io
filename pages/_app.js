import ThemeProvider from 'theme/useTheme';
import BaseLayout from 'components/base-layout' 
import '../styles/tailwind.css'

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  </ThemeProvider>
);

export default App;
