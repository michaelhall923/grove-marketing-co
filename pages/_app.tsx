import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const footerTitle = (Component as any).footerTitle ?? 'Feeling jelly yet?';

  return (
    <>
      <Head>
        <meta
          key="title"
          name="title"
          content="Grove Marketing Co. | Digital Marketing, Web Development & SEO"
        />
        <meta
          key="description"
          name="description"
          content="Grove Marketing Co. helps bold brands grow with cutting-edge marketing, custom websites, content creation, and automation. Let’s make waves together."
        />

        {/* Open Graph */}
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content="https://www.grovemarketingco.com/" />
        <meta
          key="og:title"
          property="og:title"
          content="Grove Marketing Co. | Digital Marketing, Web Development & SEO"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Grove Marketing Co. helps bold brands grow with cutting-edge marketing, custom websites, content creation, and automation. Let’s make waves together."
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://www.grovemarketingco.com/img/og-image.png"
        />

        {/* Twitter */}
        <meta key="twitter:url" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:url" name="twitter:url" content="https://www.grovemarketingco.com/" />
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Grove Marketing Co. | Digital Marketing, Web Development & SEO"
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="Grove Marketing Co. helps bold brands grow with cutting-edge marketing, custom websites, content creation, and automation. Let’s make waves together."
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content="https://www.grovemarketingco.com/img/og-image.png"
        />
      </Head>
      <Header />
      <div className="-mt-28 overflow-hidden lg:-mt-32">
        <Component {...pageProps} />
      </div>
      <Footer title={footerTitle} />
    </>
  );
}
