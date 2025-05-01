import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Grove Marketing Co. | Digital Marketing, Web Development & SEO</title>
        <meta name="title" content="Grove Marketing Co. | Digital Marketing, Web Development & SEO" />
        <meta name="description" content="Grove Marketing Co. helps bold brands grow with cutting-edge marketing, custom websites, content creation, and automation. Let’s make waves together." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grovemarketingco.com/" />
        <meta property="og:title" content="Grove Marketing Co. | Digital Marketing, Web Development & SEO" />
        <meta property="og:description" content="Grove Marketing Co. helps bold brands grow with cutting-edge marketing, custom websites, content creation, and automation. Let’s make waves together." />
        {/* <meta property="og:image" content="https://www.grovemarketingco.com/images/og-image.jpg" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.grovemarketingco.com/" />
        <meta name="twitter:title" content="Grove Marketing Co. | Digital Marketing, Web Development & SEO" />
        <meta name="twitter:description" content="Grove Marketing Co. helps bold brands grow with cutting-edge marketing, custom websites, content creation, and automation. Let’s make waves together." />
        {/* <meta name="twitter:image" content="https://www.grovemarketingco.com/images/og-image.jpg" /> */}

        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <body className="antialiased bg-grove-600 text-grove-100 font-header w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
