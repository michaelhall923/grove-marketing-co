// import Image from "next/image";
import SpriteSun from "@/components/SpriteSun";
import SpriteRocket from "@/components/SpriteRocket";
import SpriteLighthouse from "@/components/SpriteLighthouse";
import SpriteWave from "@/components/SpriteWave";
import SpriteOceanTop from "@/components/SpriteOceanTop";
import SpriteOceanLeft from "@/components/SpriteOceanLeft";
import SpriteOceanRight from "@/components/SpriteOceanRight";
import SpriteBoat from "@/components/SpriteBoat";
import SpriteSurfer from "@/components/SpriteSurfer";
import SpriteSmoke from "@/components/SpriteSmoke";
import {  builder } from "@builder.io/react";
import { GetStaticProps } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Replace with your Public API Key
builder.init('04a66a34a825475f879a3a1be1673b31');

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      },
    })
    .toPromise();

  const navigationLinks = await builder.get('navigation-links', {
    // You can use options for queries, sorting, and targeting here
    // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
  }).promise();

  // Return the page content as props
  return {
    props: {
      page: page || null,
      headerData: {
        navigationLinks: navigationLinks || [],
      },
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

export default function Home() {
  return (
    <div className="">
      <main className="lg:w-4xl mx-auto px-8">
        <h1 className="uppercase w-xs text-right mb-8">
          <div className="text-9xl leading-24 inline-block">Grove</div>
          <div className="text-4xl">Marketing Co.</div>
        </h1>
        <h2 className="md:w-lg text-5xl font-copy">
          Building adventurous brands from the Space Coast
        </h2>
        <div className="relative min-h-96">
          <div className="w-64 absolute top-4 -left-88">
            <SpriteLighthouse />
          </div>
          <div className="w-48 absolute right-28">
            <SpriteSun />
          </div>
          <div className="w-64 absolute -right-18 top-24">
            <SpriteSmoke />
          </div>
          <div className="w-32 absolute right-0 -top-32">
            <SpriteRocket />
          </div>
          <div className="w-screen absolute top-64 left-1/2 -translate-x-1/2 ">
            <SpriteWave />
          </div>
          <div className="w-screen absolute top-80 left-1/2 -translate-x-1/2 ">
            <div className="h-208" style={{ backgroundColor: "#194b51"}}></div>
          </div>
          <div className="w-screen absolute top-80 left-1/2 -translate-x-1/2 ">
            <SpriteOceanTop />
          </div>
          <div className="w-172 absolute top-136 right-full translate-x-90">
            <SpriteOceanLeft />
          </div>
          <div className="w-156 absolute top-156 left-full -translate-x-70">
            <SpriteOceanRight />
          </div>
          <div className="w-64 absolute top-32 right-64 ">
            <SpriteBoat />
          </div>
          <div className="w-64 absolute top-40 left-0 ">
            <SpriteSurfer />
          </div>
          <div className="absolute top-144 w-full">
            <h2 className="w-full lg:px-32 leading-22 inline-block text-center uppercase text-8xl">
              Start Exploring
            </h2>
            <div className="relative w-32 h-32 mt-6 mx-auto rounded-full bg-grove-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#287073" className="absolute size-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </div>
        </div>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              pages/index.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
