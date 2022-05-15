import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html>
      <Head>
    {/* // Responsive meta tag
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    //  bootstrap CDN */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> */}
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"/>
    </Head>
      

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );

}