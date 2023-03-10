import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          // href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;800;900&display=swap" // Only used weights
          rel="stylesheet"
        />
      </Head>
      <link rel="icon" href="/images/favicon.png" />
      <body className="font-sans text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
