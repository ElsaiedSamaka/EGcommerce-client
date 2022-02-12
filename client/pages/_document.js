import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* base */}
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="best ecommerce website" />

          {/* favicon */}
          <link rel="shortcut icon" href="/images/Saied_Samaka.png" />
                
                		
	      	{/* <!-- fonts files --> */}
	      	<link href='http://fonts.googleapis.com/css?family=Karla:400,400italic,700,700italic' rel='stylesheet' type='text/css'/>
          <link href='http://fonts.googleapis.com/css?family=Libre+Baskerville:400,400italic,700' rel='stylesheet' type='text/css' />
                
          {/* <!-- Font awesome css --> */}
	      	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
	        {/* <!-- Revolution slider css --> */}
          <link href="/js/rs-plugin/css/settings.css" rel="stylesheet" />
          <script src="/js/main.js"  type="text/javascript"/>
          <script src="/js/owl.carousel.min.js" type="text/javascript"/>
          <Script src="https://code.jquery.com/jquery.min.js" />
          <script src="/js/bootstrap.min.js" type="text/javascript" />
      		<script src="/js/rs-plugin/js/jquery.themepunch.plugins.min.js"/>
	      	<script src="/js/rs-plugin/js/jquery.themepunch.revolution.min.js"/>
        	<script src="/js/rs-plugin/rs.home.js"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
    
{/* <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${SiteConfig.googleAnalytic}');`
                }}
              /> */}