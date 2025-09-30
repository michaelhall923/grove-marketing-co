import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const footerTitle = (Component as any).footerTitle ?? 'Feeling jelly yet?';

  return (
    <>
      <Header />
      <div className="-mt-28 overflow-hidden lg:-mt-32">
        <Component {...pageProps} />
      </div>
      <Footer title={footerTitle} />
    </>
  );
}
