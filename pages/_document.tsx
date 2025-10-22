import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <body className="bg-grove-600 text-grove-100 font-header w-full antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
