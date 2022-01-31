import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
          <link href="/favicon.ico" rel="icon" />
          <link href="/manifest.json" rel="manifest" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link color="#ffbb09" href="/safari-pinned-tab.svg" rel="mask-icon" />

          <meta content="GeoGoGo" name="application-name" />
          <meta content="#ffc40d" name="msapplication-TileColor" />
          <meta content="#ffd76f" name="apple-mobile-web-app-status-bar" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="default" name="apple-mobile-web-app-status-bar-style" />
          <meta content="GeoGoGo" name="apple-mobile-web-app-title" />
          <meta content="telephone=no" name="format-detection" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="/browserconfig.xml" name="msapplication-config" />
          <meta content="#ffd76f" name="msapplication-TileColor" />
          <meta content="no" name="msapplication-tap-highlight" />
          <meta content="Borderless Learning" name="description" />
          <meta content="#ffd76f" media="(prefers-color-scheme: light)" name="theme-color" />
          <meta content="#2a2a2a" media="(prefers-color-scheme: dark)" name="theme-color" />

          <meta content="summary" name="twitter:card" />
          <meta content="https://geogogo.vercel.app" name="twitter:url" />
          <meta content="GeoGoGo" name="twitter:title" />
          <meta content="Borderless Learning" name="twitter:description" />
          <meta content="https://geogogo.vercel.app/icons/android-chrome-192x192.png" name="twitter:image" />
          <meta content="@crittelmeyer" name="twitter:creator" />
          <meta content="website" property="og:type" />
          <meta content="GeoGoGo" property="og:title" />
          <meta content="Borderless Learning" property="og:description" />
          <meta content="GeoGoGo" property="og:site_name" />
          <meta content="https://geogogo.vercel.app" property="og:url" />
          <meta content="https://geogogo.vercel.app/icons/apple-touch-icon.png" property="og:image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
