import Head from 'next/head';
import Theme from '../styles/theme';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Script src="/scripts/starsAnimation.js"/>
        <Head>
          <title>RAFALAMAO | Portfolio</title>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
