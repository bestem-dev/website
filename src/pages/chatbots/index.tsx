/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Footer";
import GradientLine from "@/components/GradientLine";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bestem Chatbots</title>
        <meta name="description" content="Web3 and AI software factory" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://bestem.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bestem" />
        <meta
          property="og:description"
          content="Web3 and AI software factory. We help founders to validate their web3 and AI ideas through the
                technological and full development of minimum viable products (MVP)"
        />
        <meta
          property="og:image"
          content="https://bestem.dev/images/bestemlogo.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bestem.dev" />
        <meta property="twitter:url" content="https://bestem.dev" />
        <meta name="twitter:title" content="Bestem" />
        <meta
          name="twitter:description"
          content="Web3 and AI software factory. We help founders to validate their web3 and AI ideas through the
                technological and full development of minimum viable products (MVP)"
        />
        <meta
          name="twitter:image"
          content="https://bestem.dev/images/bestemlogo.png"
        />
      </Head>
      <Header />
      <main className="flex flex-col justify-center">
        <div
          id="home"
          className="bg-neutral-800 bg-[url('/images/chainbg.webp')]
          bg-cover bg-blend-overlay"
        >
          <div className="mx-auto flex flex-col items-center justify-center gap-4 py-16 px-8 lg:w-2/3 lg:flex-row-reverse lg:justify-between lg:py-60 lg:px-0">
            <Image
              src="/images/bestemiso.webp"
              priority
              alt="Bestem"
              width={375}
              height={402}
              sizes="(max-width: 375px) 100vw, 375px"
              className="w-2/3 transition-all duration-100 ease-in-out hover:animate-pulse md:w-1/3"
            />
            <div className="flex flex-col items-center gap-4 md:w-2/3 lg:w-1/3 lg:items-start lg:gap-12">
              <h1 className="lg:leading-0 text-center text-[47px] font-black leading-10 lg:text-left lg:text-[96px] lg:leading-[0.6]">
                <span className="font-gradient primary-gradient text-5xl lg:text-[96px]">
                  GPT/LLM{" "}
                </span>
                <br />
                Chatbots
              </h1>
              <p className="text-center font-light lg:text-left lg:text-xl">
                We help compnies communicate better with their customers
                implementing{" "}
                <b className="font-medium">LLM-Agent driven chatbots</b>.
              </p>
              <LinkButton to={"/chatbots/demo"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                Try Demo
              </LinkButton>
            </div>
          </div>
        </div>
        <div
          id="services"
          className="flex flex-col items-center gap-8 bg-neutral-800 py-8 px-8 md:gap-16 md:py-16"
        >
          <div>
            <h2 className="mb-4 text-center text-3xl">
              Our <b>Services</b>
            </h2>
            <GradientLine />
          </div>
          <h3 className="text-center">
            Full development of Chatbots. <br className="md:hidden" />
            From flows to implementation.
          </h3>
          <div className="grid grid-cols-2 gap-8 md:w-2/3 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/whitepaper.svg"
                alt="Idea"
                width={20}
                height={20}
                className="h-24 w-1/3 md:w-1/4"
              />
              <h4 className="text-center">
                Analyzign, structuring and indexing relevant information.
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/landingPage.svg"
                alt="Idea"
                width={20}
                height={20}
                className="h-24 w-1/3 md:w-1/4"
              />
              <h4 className="text-center">
                Developing custom flows and tools for the chatbot.
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/uxResearch.svg"
                alt="Idea"
                width={20}
                height={20}
                className="h-24 w-1/3 md:w-1/4"
              />
              <h4 className="text-center">
                Integrating chatbot UIs in existing products.
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/mvpSmartContracts.svg"
                alt="Idea"
                width={20}
                height={20}
                className="h-24 w-1/3 md:w-1/4"
              />
              <h4 className="text-center">
                Integrating with existing platforms and APIs.
              </h4>
            </div>
          </div>
          <LinkButton to="/#contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Contact Us
          </LinkButton>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
