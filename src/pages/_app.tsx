import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
// import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      {/* <ThemeProvider theme={theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}
