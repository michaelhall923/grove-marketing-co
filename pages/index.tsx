// import Image from "next/image";
import SpriteSun from "@/components/SpriteSun";
import SpriteSunRays from "@/components/SpriteSunRays";
import SpriteRocket from "@/components/SpriteRocket";
import SpriteLighthouse from "@/components/SpriteLighthouse";
import SpriteWave from "@/components/SpriteWave";
import SpriteWaveBottom from "@/components/SpriteWaveBottom";
import SpriteOceanTop from "@/components/SpriteOceanTop";
import SpriteOceanLeft from "@/components/SpriteOceanLeft";
import SpriteOceanRight from "@/components/SpriteOceanRight";
import SpriteBoat from "@/components/SpriteBoat";
import SpriteSurfer from "@/components/SpriteSurfer";
import SpriteSmoke from "@/components/SpriteSmoke";
import {  builder } from "@builder.io/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
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
      <main className="">
        <div className="lg:w-4xl mx-auto px-8 min-h-144">
          <h1 className="uppercase w-xs text-right mb-8">
            <div className="text-9xl leading-24 inline-block">Grove</div>
            <div className="text-4xl">Marketing Co.</div>
          </h1>
          <h2 className="md:w-lg text-5xl font-copy">
            Building adventurous brands from the Space Coast
          </h2>
        </div>

        <div style={{backgroundColor: "#194b51"}} className="min-h-232">
          <div className="relative min-h-48">
            <div className="w-64 absolute -top-76 left-0">
              <SpriteLighthouse />
            </div>
            <div className="w-48 absolute -top-80 right-60">
              <SpriteSun />
            </div>
            <div className="w-64 absolute -top-56 right-14">
              <SpriteSmoke />
            </div>
            <div className="w-32 absolute -top-112 right-32">
              <SpriteRocket />
            </div>
            <div className="w-screen absolute -top-16 left-1/2 -translate-x-1/2">
              <SpriteWave />
            </div>
            <div className="w-screen absolute top-4 left-1/2 -translate-x-1/2">
              <SpriteOceanTop />
            </div>
            <div className="w-192 absolute top-64 right-full translate-x-172">
              <SpriteOceanLeft />
            </div>
            <div className="w-156 absolute top-88 left-full -translate-x-128">
              <SpriteOceanRight />
            </div>
            <div className="w-64 absolute -top-48 right-96 ">
              <SpriteBoat />
            </div>
            <div className="w-64 absolute -top-40 left-64 ">
              <SpriteSurfer />
            </div>
            <div className="absolute top-76 w-full lg:w-4xl left-1/2 -translate-x-1/2">
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
        </div>

        <div className="min-h-400" style={{background: "linear-gradient(to bottom, rgb(16, 106, 108), rgb(8, 90, 98))"}}>
          <div className="relative">
            <div className="w-272 absolute top-0 left-1/2 -translate-x-1/2">
              <SpriteSunRays />
            </div>
            <div className="w-screen absolute -top-8 left-1/2 -translate-x-1/2">
              <SpriteWaveBottom />
            </div>

            <div className="absolute top-76 w-full lg:w-3xl left-1/2 -translate-x-1/2 rounded-4xl p-2" style={{backgroundColor: "#6EA39E"}}>
              <div className="rounded-3xl p-2" style={{backgroundColor: "#4F8D8C"}}>
                <div className="rounded-2xl p-2" style={{backgroundColor: "#255C67"}}>
                  <div className="relative">
                    <div className="absolute w-full h-full pointer-events-none">
                      <div className="absolute top-0 left-0 rounded-full inline-block" style={{backgroundColor: "#255C67", padding: "2px"}}>
                        <div className="rounded-full p-px" style={{backgroundColor: "#6EA39E"}}>
                          <div className="w-4 h-4 rounded-full " style={{backgroundColor: "#4F8D8C"}}></div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 rounded-full inline-block" style={{backgroundColor: "#255C67", padding: "2px"}}>
                        <div className="rounded-full p-px" style={{backgroundColor: "#6EA39E"}}>
                          <div className="w-4 h-4 rounded-full " style={{backgroundColor: "#4F8D8C"}}></div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 rounded-full inline-block" style={{backgroundColor: "#255C67", padding: "2px"}}>
                        <div className="rounded-full p-px" style={{backgroundColor: "#6EA39E"}}>
                          <div className="w-4 h-4 rounded-full " style={{backgroundColor: "#4F8D8C"}}></div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 rounded-full inline-block" style={{backgroundColor: "#255C67", padding: "2px"}}>
                        <div className="rounded-full p-px" style={{backgroundColor: "#6EA39E"}}>
                          <div className="w-4 h-4 rounded-full " style={{backgroundColor: "#4F8D8C"}}></div>
                        </div>
                      </div>
                    </div>
                    <h2 className="mt-12 mb-4 w-full  leading-22 inline-block text-center uppercase text-8xl">
                      Our Services
                    </h2>
                    <div className="px-8 pb-8">
                      <div className="grid grid-rows-2 grid-cols-2 gap-px w-full">
                        <div className="p-8 pb-0">
                          <div className="h-56 w-56 mx-auto rounded-full overflow-hidden mb-4" style={{border: "7px solid #6EA39E"}}>
                            <Image
                              className="scale-110"
                              src="/img/icon-web-development.svg"
                              alt="Web Development"
                              width={500}
                              height={500}
                              priority
                            />
                          </div>
                          <h3 className="text-center text-4xl">
                            <Link href="">Web Development</Link>
                          </h3>
                        </div>
                        <div className="p-8 pb-0">
                          <div className="h-56 w-56 mx-auto rounded-full overflow-hidden mb-4" style={{border: "7px solid #6EA39E"}}>
                            <Image
                              className="scale-110"
                              src="/img/icon-integration-automation.svg"
                              alt="Integration & Automation"
                              width={500}
                              height={500}
                              priority
                            />
                          </div>
                          <h3 className="text-center text-4xl">
                            <Link href="">Integration & Automation</Link>
                          </h3>
                        </div>
                        <div className="p-8 pb-0">
                          <div className="h-56 w-56 mx-auto rounded-full overflow-hidden mb-4" style={{border: "7px solid #6EA39E"}}>
                            <Image
                              className="scale-110"
                              src="/img/icon-content-creation.svg"
                              alt="Content Creation"
                              width={500}
                              height={500}
                              priority
                            />
                          </div>
                          <h3 className="text-center text-4xl">
                            <Link href="">Content Creation</Link>
                          </h3>
                        </div>
                        <div className="p-8 pb-0">
                          <div className="h-56 w-56 mx-auto rounded-full overflow-hidden mb-4" style={{border: "7px solid #6EA39E"}}>
                            <Image
                              className="scale-110"
                              src="/img/icon-advertising-seo.svg"
                              alt="Advertising & SEO"
                              width={500}
                              height={500}
                              priority
                            />
                          </div>
                          <h3 className="text-center text-4xl">
                            <Link href="">Advertising & SEO</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
