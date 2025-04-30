import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '../components/header';

export default function App({ Component, pageProps }: AppProps) {
  return <div className="bg-grove-600 text-grove-100 font-header absolute w-full">
    <Header data={pageProps.headerData} />
    <Component {...pageProps} />
  </div>;
}
