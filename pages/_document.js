import { useEffect } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useTheme, LIGHT } from '../theme/useTheme';

const InnerComponent = () => {
  const { mode } = useTheme();
  return (
    <Html lang='en' className={mode === LIGHT ? '' : 'dark' }>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default class MyDocument extends Document {
  render() {
    return (
      <InnerComponent />
    );
  }
}
