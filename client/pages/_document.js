import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* base */}
          <meta charSet="utf-8" />
          <meta name="description" content="best ecommerce website" />

          {/* favicon */}
          <link rel="shortcut icon" href="/images/Saied_Samaka.png" />

          {/* <!-- fonts files --> */}
          <link
            href="http://fonts.googleapis.com/css?family=Karla:400,400italic,700,700italic"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="http://fonts.googleapis.com/css?family=Libre+Baskerville:400,400italic,700"
            rel="stylesheet"
            type="text/css"
          />

          {/* <!-- Font awesome css --> */}
          <link
            rel="stylesheet"
            href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
          />
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
