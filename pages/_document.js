import Document, { Html, Head, NextScript, Main } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="cartModal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
