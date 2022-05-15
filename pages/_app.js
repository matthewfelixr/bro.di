import React from 'react';

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/globals.css'
import '../pages/components/Layout/App.css'
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Component {...pageProps} />
    </>
    );
}

export default MyApp
