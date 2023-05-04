import Document, { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import i18nextConfig from "../next-i18next.config";

class MyDocument extends Document<DocumentProps> {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
