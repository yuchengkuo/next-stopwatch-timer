import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <meta name="description" content="Nextjs stopwatch, timer" />
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
