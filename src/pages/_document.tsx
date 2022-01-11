import Document, { Html, Head, Main, NextScript } from 'next/document'

/* eslint-disable react/no-danger */
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
/* eslint-enable react/no-danger */
