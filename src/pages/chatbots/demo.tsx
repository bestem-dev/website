/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import { ChatWindow } from "@/components/Chat";

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
          id="demo"
          className="flex h-[calc(100vh-5rem)] flex-col justify-start bg-neutral-800 bg-cover bg-blend-overlay md:items-center
          md:justify-center md:bg-[url('/images/chainbg.webp')]"
        >
          <div className="h-full w-full justify-between overflow-clip md:m-4 md:h-[60vh] md:max-h-[80vh] md:max-w-[769px] md:rounded-2xl md:shadow-lg md:shadow-neutral-900">
            <ChatWindow />
          </div>
          {/* <div className="md:hidden">
            <Footer />
          </div> */}
        </div>
      </main>
    </>
  );
};
export default Home;
