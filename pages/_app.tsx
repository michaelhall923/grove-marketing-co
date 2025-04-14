import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '../components/header';

export default function App({ Component, pageProps }: AppProps) {
  return <div className="bg-amber-600 text-amber-100 font-header">
    <Header data={pageProps.headerData} />
    <Component {...pageProps} />
  </div>;
}
