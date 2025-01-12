import Head from 'next/head';
import Script from 'next/script';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Script src='/scripts/starsAnimation.js' />

        {/* Google analytics */}
        <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-QCM76C6CMH`} />
        <Script strategy='lazyOnload'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QCM76C6CMH');
          `}
        </Script>
        <Head>
          <title>RAFALAMAO | Portfolio</title>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
