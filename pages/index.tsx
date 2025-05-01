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
import SpriteDolphin from "@/components/SpriteDolphin";
import SpriteJellyfish from "@/components/SpriteJellyfish";
import SpriteFish from "@/components/SpriteFish";
import SpriteSeaFloor from "@/components/SpriteSeaFloor";
import SpriteConstructionSign from "@/components/SpriteConstructionSign";
import ScrollShow from "@/components/ScrollShow";
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
    <div className="-mt-20 md:mt-0">
      <main className="">
        <div className="md:w-2xl lg:w-4xl mx-auto px-4 lg:px-8 min-h-110 md:min-h-144">
          <h1 className="uppercase w-3/4 md:w-xs lg:w-xs text-right mb-8">
            <div className="text-8xl md:text-9xl leading-18 md:leading-24 inline-block">Grove</div>
            <div className="text-3xl">Marketing Co.</div>
          </h1>
          <h2 className="md:w-2xl text-2xl md:text-4xl lg:text-5xl font-copy">
            Building adventurous brands<br/>from the Space Coast
          </h2>
        </div>

        <div style={{backgroundColor: "#194b51"}} className="">
          <div className="relative min-h-110 md:min-h-172 lg:min-h-232">
            <div className="w-32 md:w-54 lg:w-64 absolute -top-38 md:-top-76 left-0">
              <SpriteLighthouse />
            </div>
            <div className="w-20 md:w-42 lg:w-48 absolute -top-40 md:-top-80 right-18 md:right-36 lg:right-60">
              <SpriteSun />
            </div>
            <div className="w-32 md:w-64 absolute -top-28 md:-top-56 right-0 lg:right-14">
              <SpriteSmoke />
            </div>
            <div className="w-16 md:w-32 absolute -top-56 md:-top-112 right-9 md:right-18 lg:right-32">
              <SpriteRocket />
            </div>
            <div className="w-screen absolute -top-6 md:-top-16 lg:-top-16 left-1/2 -translate-x-1/2">
              <SpriteWave />
            </div>
            <div className="w-screen absolute top-0 h-100" style={{backgroundColor: "#194b51"}}></div>
            <div className="w-screen absolute top-0 md:-top-8 lg:-top-4 left-1/2 -translate-x-1/2">
              <SpriteOceanTop />
            </div>
            <div className="absolute top-0 bottom-0 w-screen overflow-x-hidden">
              <div className="w-76 md:w-120 lg:w-192 absolute top-22 md:top-44 lg:top-64 left-0 lg:right-full -translate-x-20 lg:translate-x-172">
                <SpriteOceanLeft />
              </div>
              <div className="w-76 md:w-110 lg:w-156 absolute top-48 md:top-66 lg:top-88 right-0 lg:left-full translate-x-32 lg:-translate-x-128">
                <SpriteOceanRight />
              </div>
            </div>
            <div className="w-32 md:w-64 absolute -top-22 md:-top-48 right-14 md:right-44 lg:right-1/4 ">
              <SpriteBoat />
            </div>
            <div className="w-24 md:w-48 lg:w-64 absolute -top-14 md:-top-40 left-14 md:left-16 lg:left-64 ">
              <SpriteSurfer />
            </div>
            <div className="absolute top-32 md:top-54 lg:top-76 w-full lg:w-4xl left-1/2 -translate-x-1/2">
              <h2 className="w-full px-4 lg:px-32 leading-16 md:leading-22 inline-block text-center uppercase text-6xl md:text-8xl">
                Start Exploring
              </h2>
              <div className="relative w-16 md:w-32 h-16 md:h-32 mt-6 mx-auto rounded-full bg-grove-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#287073" className="absolute size-10 md:size-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-250 md:min-h-300 lg:min-h-300" style={{background: "linear-gradient(to bottom, rgb(16, 106, 108), rgb(8, 90, 98))"}}>
          <div className="relative">
            <div className="w-272 max-w-full absolute top-0 left-1/2 -translate-x-1/2">
              <SpriteSunRays />
            </div>
            <div className="w-screen absolute top-0 md:-top-1 left-1/2 -translate-x-1/2">
              <SpriteWaveBottom />
            </div>
            <div className="w-40 md:w-60 lg:w-80 absolute top-36 md:top-60 -left-20 md:left-0 lg:left-12">
              <ScrollShow>
                <SpriteDolphin />
              </ScrollShow>
            </div>
            <div className="w-18 md:w-28 lg:w-36 absolute top-40 md:top-56 right-6 md:right-14 lg:right-24">
              <ScrollShow>
                <SpriteJellyfish />
              </ScrollShow>
            </div>
            <ScrollShow>
              <div className="absolute w-screen scale-50 md:scale-100 top-44 lg:top-0">
                <div className="w-20 absolute top-40 left-1/4 md:left-1/2">
                  <SpriteFish />
                </div>
                <div className="w-18 absolute top-48 left-1/4 md:left-1/2 translate-x-16">
                  <SpriteFish />
                </div>
                <div className="w-16 absolute top-56 left-1/4 md:left-1/2 translate-x-4">
                  <SpriteFish />
                </div>
                <div className="w-14 absolute top-50 left-1/4 md:left-1/2 -translate-x-8">
                  <SpriteFish />
                </div>
                <div className="w-12 absolute top-36 left-1/4 md:left-1/2 translate-x-18">
                  <SpriteFish />
                </div>
              </div>
            </ScrollShow>

            <div className="absolute top-88 md:top-120 lg:top-100 w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-xl left-1/2 -translate-x-1/2 rounded-4xl p-2" style={{backgroundColor: "#4F8D8C"}}>
              <div className="rounded-3xl p-2" style={{backgroundColor: "#255C67"}}>
                <div className="rounded-2xl p-2" style={{backgroundColor: "rgb(4,72,80)"}}>
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
                    <h2 className="mt-6 md:mb-4 w-full leading-22 inline-block text-center uppercase text-5xl md:text-7xl">
                      Our Services
                    </h2>
                    <div className="px-4 pb-4 md:pb-8 text-lg md:text-2xl leading-6 md:leading-8">
                      <div className="grid grid-rows-2 grid-cols-2 gap-px gap-y-4 md:gap-y-8 w-full">
                        {/* <Link href=""> */}
                            <div>
                              <div className="size-28 md:size-44 mx-auto rounded-full overflow-hidden mb-4 border-4 md:border-6" style={{borderColor: "#6EA39E"}}>
                                <Image
                                  className="scale-110"
                                  src="/img/icon-web-development.svg"
                                  alt="Web Development"
                                  width={500}
                                  height={500}
                                  priority
                                />
                              </div>
                              <h3 className="text-center">
                                Web Development
                              </h3>
                            </div>
                        {/* </Link> */}
                        
                        {/* <Link href=""> */}
                          <div>
                            <div className="size-28 md:size-44 mx-auto rounded-full overflow-hidden mb-4 border-4 md:border-6" style={{borderColor: "#6EA39E"}}>
                              <Image
                                className="scale-110"
                                src="/img/icon-integration-automation.svg"
                                alt="Integration & Automation"
                                width={500}
                                height={500}
                                priority
                              />
                            </div>
                            <h3 className="text-center">
                              Integration & Automation
                            </h3>
                          </div>
                        {/* </Link> */}

                        {/* <Link href=""> */}
                          <div>
                            <div className="size-28 md:size-44 mx-auto rounded-full overflow-hidden mb-4 border-4 md:border-6" style={{borderColor: "#6EA39E"}}>
                              <Image
                                className="scale-110"
                                src="/img/icon-content-creation.svg"
                                alt="Content Creation"
                                width={500}
                                height={500}
                                priority
                              />
                            </div>
                            <h3 className="text-center">
                              Content Creation
                            </h3>
                          </div>
                        {/* </Link> */}

                        {/* <Link href=""> */}
                          <div>
                            <div className="size-28 md:size-44 mx-auto rounded-full overflow-hidden mb-4 border-4 md:border-6" style={{borderColor: "#6EA39E"}}>
                              <Image
                                className="scale-110"
                                src="/img/icon-advertising-seo.svg"
                                alt="Advertising & SEO"
                                width={500}
                                height={500}
                                priority
                              />
                            </div>
                            <h3 className="text-center">
                              Advertising & SEO
                            </h3>
                          </div>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-90 md:h-200" style={{background: "linear-gradient(to bottom, rgb(8, 90, 98), rgb(20, 52, 52))"}}>
          <div className="relative h-full">
            <div className="w-screen absolute bottom-0 left-1/2 -translate-x-1/2">
              <SpriteSeaFloor />
            </div>
            <div className="w-4/5 lg:w-150 absolute bottom-0 md:bottom-20 left-1/2 -translate-x-1/2">
              <SpriteConstructionSign />
              <div className="absolute top-0 md:top-12 w-full px-5 md:px-16 py-6 md:py-12 text-center" style={{rotate: "1.5deg"}}>
                <h2 className="text-2xl md:text-5xl md:mb-4">Site Under Construction</h2>
                <p className="text-md md:text-3xl mb-4 md:mb-8 font-copy">We&apos;re still polishing shells and patching up coral – more info coming soon!</p>
                <p className="text-xl md:text-3xl">
                  <Link href="tel:3177775858">(317) 777-5858</Link>
                </p>
                <p className="text-xl md:text-3xl">
                  <Link href="mailto:sales@grovemarketingco.com">sales@grovemarketingco.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-20 md:h-40 -mt-px lg:hidden" style={{background: "linear-gradient(#0b1f1e, #050f0f)"}}></div>
        
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
