import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {

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
		      <link rel="stylesheet" href="/css/owl.carousel.css"/>
          
          <link href="/js/rs-plugin/css/settings.css" rel="stylesheet" />
          <script src="/js/main.js" />
          <script src="/js/owl.carousel.min.js" />
          {/* <Script src="https://code.jquery.com/jquery.min.js" /> */}
          <script src="/js/bootstrap.min.js"  />
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