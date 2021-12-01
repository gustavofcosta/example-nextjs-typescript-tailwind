// eslint-disable-next-line import-helpers/order-imports
import type { AppProps } from 'next/app';

import '../styles/globals.css';

// eslint-disable-next-line import-helpers/order-imports
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} key={router.route} />
    </ThemeProvider>
  );
}

export default MyApp;
