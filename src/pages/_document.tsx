import Document, { Html, Head, Main, NextScript } from 'next/document'

import { withEmotionCache } from 'tss-react/nextJs'
import { createMuiCache } from './_app'

/* eslint-disable @next/next/no-page-custom-font */
class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
          <meta content="Learn geography easily!" name="description" />
          <meta content="initial-scale=1, width=device-width" name="viewport" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
/* eslint-enable @next/next/no-page-custom-font */

export default withEmotionCache({
  Document: AppDocument,
  getCaches: () => [createMuiCache()]
})
