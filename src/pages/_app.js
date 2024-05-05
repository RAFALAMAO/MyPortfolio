import Head from 'next/head';
import Script from 'next/script';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Script src='/scripts/starsAnimation.js' />
        <Head>
          <title>RAFALAMAO | Portfolio</title>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
