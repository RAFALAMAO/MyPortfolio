import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <title>RAFALAMAO | Portfolio</title>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
          <link rel="manifest" href="/static/site.webmanifest"/>
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#0d0e21"/>
          <meta name="theme-color" content="#0d0e21"></meta>
        </Head>
        <body style={{
            // backgroundImage: "url('/images/background/bgHead666.jpg'), url('/images/background/bgBody6666.jpg')",
            // backgroundRepeat: 'no-repeat, repeat',
            // backgroundSize: 'contain, contain',
          }}>
          <div>
            <canvas
              id='canvas-stars'
              style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <script src="/static/starsAnimation.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}