import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/globals.css'
import '../pages/components/Layout/App.css'
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
function MyApp({ Component, pageProps }) {
  
  return (
    <>
    
    <Head>
    // Responsive meta tag
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    //  bootstrap CDN
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
    crossorigin="anonymous" 
    />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"/>
    </Head>
      
    <Script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"/>
    <Component {...pageProps} />
    </>
    );
}

export default MyApp
