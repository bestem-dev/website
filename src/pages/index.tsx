/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import GradientLine from "../components/GradientLine";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import ProjectCard from "../components/ProjectCard";
import TeamMemberProfile from "../components/TeamProfile";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bestem</title>
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
                  WEB3/AI{" "}
                </span>
                <br />
                FACTORY
              </h1>
              <p className="text-center font-light lg:text-left lg:text-xl">
                We help founders to validate their web3 and AI ideas through the
                technological and full{" "}
                <b className="font-medium">
                  development of minimum viable products (MVP)
                </b>
                .
              </p>
              <LinkButton to={"#services"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                  />
                </svg>
                More info
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
            Full development of MVPs. <br className="md:hidden" />
            From Idea to market.
          </h3>
          <div className="grid grid-cols-2 gap-8 md:w-2/3 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/whitepaper.svg"
                alt="Idea"
                width={20}
                height={20}
                className="w-1/3 md:w-1/4"
              />
              <h4 className="text-center">
                Whitepaper and tokenomics development consultancy.
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/landingPage.svg"
                alt="Idea"
                width={20}
                height={20}
                className="w-1/3 md:w-1/4"
              />
              <h4 className="text-center">
                Landing page and pitch-deck design.
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/uxResearch.svg"
                alt="Idea"
                width={20}
                height={20}
                className="w-1/3 md:w-1/4"
              />
              <h4 className="text-center">
                UX Research, Prototyping and Iteration.
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/mvpSmartContracts.svg"
                alt="Idea"
                width={20}
                height={20}
                className="w-1/3 md:w-1/4"
              />
              <h4 className="text-center">
                Development of MVP and Smart-Contracts.
              </h4>
            </div>
          </div>
          <LinkButton to="#contact">
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
        <div
          id="team"
          className="flex flex-col items-center gap-8 bg-[#5D0EC1] bg-gradient-to-b from-[#5D0EC1] to-[#3B0684] py-8 px-8 md:gap-16 md:py-16"
        >
          <div>
            <h2 className="mb-4 text-center text-3xl">
              About <b>Us</b>
            </h2>
            <GradientLine />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:w-2/3 md:flex-row md:justify-around">
            <TeamMemberProfile
              name="Arturo Grande"
              role="Design | Marketing | Business"
              image="/images/ArturoGrande.png"
              linkedin="https://www.linkedin.com/in/arturo-grande/"
              twitter="https://twitter.com/artugrande"
              email="mailto:infoarturogrande@gmail.com"
            />
            <TeamMemberProfile
              name="Francesco gentile"
              role="Full-Stack & Smart Contract Developer"
              image="/images/FrancescoGentile.png"
              linkedin="https://www.linkedin.com/in/eyon-dev/"
              twitter="https://twitter.com/eyondev"
              email="mailto:francescogentyle@gmail.com"
            />
          </div>
        </div>
        <div
          id="mission"
          className="flex flex-col items-center justify-center gap-8 bg-neutral-900 bg-[url('/images/MissionBg.webp')] py-8 px-8 pt-32 md:flex-row"
        >
          <div className="flex flex-col items-center justify-center gap-8 md:w-1/3 md:items-start">
            <div>
              <h2 className="mb-4 text-start text-3xl">
                Our <b>Mission</b>
              </h2>
              <GradientLine />
            </div>
            <p className="mx-6 max-w-xl md:mx-0">
              We are not limited to web3. We want to build the future of the
              internet.
              <br /> <br />
              We develop innovative solutions that work as sustainable
              businesses and generate positive impact using a holistic approach
              to technology.
            </p>
            <h3 className="font-gradient primary-gradient inline-block gap-2 text-xl font-bold">
              Impact Areas We Prioritize{" "}
              <span className="hidden md:inline-block">{">"}</span>
            </h3>
          </div>

          <div className="flex flex-row-reverse items-center justify-center gap-4 sm:flex-col md:gap-8">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-12">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="images/mission/desci.svg"
                  alt="Desci"
                  width={96}
                  height={96}
                />
                <div className="flex h-10 flex-row items-center justify-center">
                  <h4>DesSci</h4>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="images/mission/networkState.svg"
                  alt="Governance"
                  width={96}
                  height={96}
                />
                <div className="flex h-10 flex-row items-center justify-center">
                  <h4 className="text-center">Governance</h4>
                </div>
              </div>
              <div className="items-centergap-2 flex flex-col gap-2">
                <Image
                  src="images/mission/refi.svg"
                  alt="ReFi"
                  width={96}
                  height={96}
                />
                <div className="flex h-10 flex-row items-center justify-center">
                  <h4 className="text-center">ReFi</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-12">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="images/mission/ai.svg"
                  alt="AI"
                  width={96}
                  height={96}
                />
                <div className="flex h-10 flex-row items-center justify-center">
                  <h4 className="text-center">AI</h4>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="images/mission/futEdu.svg"
                  alt="Education"
                  width={96}
                  height={96}
                />{" "}
                <div className="flex h-10 flex-row items-center justify-center">
                  <h4 className="text-center">Education</h4>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="images/mission/propTech.svg"
                  alt="PropTech"
                  width={96}
                  height={96}
                />
                <div className="flex h-10 flex-row items-center justify-center">
                  <h4 className="text-center">Prop-Tech</h4>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="images/mission/metaverse.svg"
                  alt="Metarverse"
                  width={96}
                  height={96}
                />
                <div className="flex h-10 flex-row items-center justify-center">
                  <h4 className="text-center">Metaverse</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="work-history"
          className="flex flex-col items-center gap-8 bg-neutral-900 py-8 px-8 md:gap-16 md:px-0 md:py-16"
        >
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-center text-3xl">Our Recent Work</h2>
            <GradientLine />
          </div>
          <div className="grid grid-cols-1 gap-8 md:w-2/3 md:grid-cols-3">
            <ProjectCard
              title="Knoly"
              description="Web3 Knowledge p2p verification."
              image="/images/prevWorks/knoly.png"
              link="https://knoly.me/"
              services="We provided services of: rebranding, UX research, white-paper consultancy,  prototype, and MVP development."
            />
            <ProjectCard
              title="Web3 Makers"
              description="Startup-Society web3 enthusiasts."
              image="/images/prevWorks/w3m.png"
              link="https://web3makers.org/"
              services="Main organizers, branding, solidity, ux, product development and ReFi workshops."
            />
            <ProjectCard
              title="CheCityBot"
              description="AI tour guide based on OpenAI."
              image="/images/prevWorks/checitybot.png"
              link="https://checitybot.vercel.app/"
              services="Branding, OpenAI API integration, prompt enginering and front-end design."
            />
            <ProjectCard
              title="ImpactOnChain"
              description="CEX Crypto-FIAT."
              image="/images/prevWorks/impactonchain.png"
              link="https://www.figma.com/file/8YJSLHkIn6jEuFiraJBKBa/ImpactOnChain-UX?node-id=0%3A1&t=XyKSjp1Pwz3Pc3y4-0"
              services="Ux research, prototype, and MVP development."
            />
            <ProjectCard
              title="Tokedu"
              description="Ed-tech gaming."
              image="/images/prevWorks/tokeducard.png"
              link="https://www.figma.com/proto/WSkKqFV8urxkzXCfNzDz8U/Tokedu-2.0?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
              services="Ed-Content creation, UX research and prototype."
            />
            <ProjectCard
              title="BeTrusty"
              description="Web3 prop-tech (real state tokens)"
              image="/images/prevWorks/mockupbetrusty.png"
              link="https://www.figma.com/file/qsnsSUKg7dIkdbhPfnVz1H/BeTrusty-UX?t=qzZPQ5ddLqDBQe5f-0"
              services="Technical consultancy, UX research and prototypes."
            />
          </div>
        </div>
        <div
          id="talent"
          className="bg-[#5D0EC1] bg-gradient-to-b from-[#5D0EC1] to-[#3B0684]"
        >
          <div className="mx-auto flex flex-col-reverse items-center gap-8 py-8 px-12 md:w-2/3 md:flex-row md:gap-16 md:px-0 md:py-32">
            <div className="flex flex-col items-center gap-8 md:items-start">
              <div className="flex flex-col items-center">
                <h2 className="mb-4 text-center text-3xl">
                  Work with <b>US</b>
                </h2>
                <GradientLine />
              </div>
              <p>
                We recruit the best human capital in our region to shape your
                ideas into products the market will love. Our talent pool is
                dedicated to building world class products.
              </p>

              <LinkButton to="https://forms.gle/jqhqBbmWe8m6h5Tv8">
                <svg
                  width="33"
                  height="20"
                  viewBox="0 0 33 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.7554 17.9064C26.4248 17.9064 25.0927 17.9189 23.762 17.8981C23.3941 17.8926 23.2488 17.9604 23.2585 18.3726C23.2765 19.1278 22.9763 19.3976 22.228 19.3976C18.4075 19.3989 14.5855 19.3989 10.765 19.3976C10.0374 19.3976 9.71651 19.1251 9.74418 18.4168C9.76216 17.9493 9.58095 17.894 9.17981 17.8967C6.68997 17.9133 4.20012 17.905 1.71028 17.905C0.118157 17.905 0.0157972 17.8054 0.0227134 16.1898C0.0282464 14.9283 -0.0616647 13.6543 0.0821931 12.408C0.351926 10.0606 1.92468 8.46575 4.26375 8.25826C6.04676 8.10057 7.85604 8.10196 9.64735 8.2887C10.7553 8.40489 11.6724 8.94712 12.4042 9.77845C12.5895 9.98871 12.7292 10.0676 13.0031 9.95689C13.4043 9.79367 13.8344 9.74249 14.2715 9.74525C15.7751 9.75217 17.2801 9.75217 18.7837 9.74525C19.1516 9.74387 19.5182 9.77984 19.8529 9.90986C20.2071 10.0468 20.4132 9.99562 20.6746 9.70099C21.4492 8.82678 22.4562 8.30114 23.614 8.24858C25.3901 8.16697 27.18 8.06461 28.9464 8.29423C31.2717 8.59716 32.8845 10.4327 32.9661 12.776C33.0145 14.1578 32.9883 15.5424 32.9758 16.9243C32.9703 17.5869 32.6217 17.8981 31.9066 17.9023C30.5219 17.9119 29.1387 17.9064 27.7554 17.9064ZM16.4557 17.674C18.0105 17.674 19.5666 17.6754 21.1214 17.6726C21.333 17.6726 21.5765 17.7473 21.5696 17.367C21.5502 16.3655 21.5958 15.3612 21.553 14.3612C21.481 12.704 20.3454 11.5352 18.6938 11.4798C17.1584 11.4287 15.6174 11.4342 14.082 11.502C12.7569 11.5601 11.6987 12.5961 11.5037 13.9171C11.3418 15.0154 11.4857 16.1262 11.429 17.2286C11.4096 17.6076 11.5438 17.6851 11.8937 17.6809C13.4139 17.6643 14.9355 17.674 16.4557 17.674ZM27.2561 16.1815C28.4664 16.1815 29.6768 16.176 30.8871 16.1857C31.1389 16.1884 31.2495 16.1455 31.244 15.8537C31.2232 14.7996 31.2592 13.7442 31.2274 12.6902C31.1817 11.2253 29.9009 9.97626 28.4305 9.95827C26.9269 9.93891 25.4219 9.94168 23.9183 9.96104C23.2032 9.97072 22.589 10.2626 22.0578 10.7481C21.8587 10.9307 21.8462 11.0441 22.0385 11.2461C22.6623 11.899 23.0496 12.686 23.2032 13.5713C23.3221 14.2546 23.3042 14.9532 23.2585 15.6407C23.2253 16.1248 23.3996 16.2036 23.8339 16.1926C24.9723 16.1608 26.1149 16.1815 27.2561 16.1815ZM5.72723 16.1815C6.67613 16.1815 7.62642 16.1815 8.57533 16.1815C9.72896 16.1815 9.76078 16.1801 9.72204 15.0445C9.67225 13.5907 9.96965 12.2697 11.0085 11.1921C11.1841 11.0095 11.1081 10.9044 10.967 10.7716C10.4178 10.2543 9.77322 9.95966 9.01659 9.95551C7.54896 9.94721 6.08272 9.94029 4.61509 9.95551C3.07139 9.97211 1.7905 11.2502 1.76699 12.7898C1.75177 13.7913 1.77805 14.7927 1.75454 15.7928C1.74624 16.1179 1.83753 16.194 2.1543 16.1884C3.34527 16.1691 4.53625 16.1815 5.72723 16.1815Z"
                    fill="#52FCA9"
                  />
                  <path
                    d="M22.3041 3.898C22.3027 1.73876 24.0152 0.00554616 26.155 1.31687e-05C28.3281 -0.00551982 30.0876 1.73322 30.0848 3.88417C30.0821 6.04895 28.3406 7.7794 26.1661 7.7794C24.0193 7.7794 22.3055 6.05587 22.3041 3.898ZM26.1744 6.04481C27.3958 6.05034 28.335 5.12356 28.3433 3.90492C28.3516 2.68628 27.4166 1.74014 26.2021 1.73737C24.9793 1.73461 24.0359 2.66276 24.0262 3.87726C24.0165 5.0876 24.9585 6.03927 26.1744 6.04481Z"
                    fill="#52FCA9"
                  />
                  <path
                    d="M10.6945 3.89386C10.6903 6.07386 8.96817 7.78217 6.77987 7.77802C4.64552 7.77525 2.9137 6.03236 2.9137 3.88695C2.9137 1.73323 4.67042 -0.00689569 6.83935 2.05455e-05C8.982 0.00555354 10.6986 1.74015 10.6945 3.89386ZM6.81307 6.04481C8.02618 6.04481 8.97094 5.10559 8.97785 3.88971C8.98477 2.69182 8.01926 1.73461 6.8103 1.73876C5.58475 1.74291 4.65521 2.67384 4.65797 3.89386C4.65935 5.11527 5.5889 6.04481 6.81307 6.04481Z"
                    fill="#52FCA9"
                  />
                  <path
                    d="M16.4502 1.51039C18.5596 1.45921 20.3426 3.18135 20.4049 5.32954C20.4671 7.43899 18.7035 9.25934 16.5484 9.31191C14.4375 9.36309 12.6241 7.58285 12.5923 5.42913C12.5619 3.32244 14.2937 1.56295 16.4502 1.51039ZM16.4543 7.57316C17.6522 7.59115 18.644 6.64362 18.6772 5.44849C18.7104 4.28103 17.7214 3.25051 16.5442 3.22423C15.374 3.19795 14.3504 4.18144 14.3213 5.36135C14.2923 6.53711 15.273 7.55518 16.4543 7.57316Z"
                    fill="#52FCA9"
                  />
                </svg>{" "}
                  We are Hiring!
              </LinkButton>
            </div>
            <Image
              src="/images/world.png"
              alt="world"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div id="contact" className="bg-neutral-800">
          <div className="mx-auto flex flex-col items-center justify-between gap-8 py-8 md:w-2/3 md:flex-row md:gap-16  md:py-16">
            <div className="flex flex-col items-center gap-8 px-8 md:items-start md:gap-16 md:px-0">
              <div className="flex flex-col items-center md:items-start">
                <h2 className="mb-4 text-3xl">Contact</h2>
                <GradientLine />
              </div>
              <div className="flex w-auto flex-col items-center gap-4 md:w-64 md:items-start">
                <Link href="mailto:info@bestem.dev">
                  <div className="flex items-center gap-4 transition-all hover:scale-105 hover:font-bold hover:opacity-90">
                    <svg
                      width="25"
                      height="18"
                      viewBox="0 0 25 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0233 0.00197482C15.0583 0.00197482 18.0933 -0.00246853 21.1283 0.00197482C23.2124 0.00641817 23.9944 0.801778 23.9989 2.91237C24.0033 6.98247 24.0033 11.057 23.9989 15.1271C23.9944 17.2111 23.199 17.9931 21.0839 17.9975C15.0139 18.002 8.9439 18.002 2.87391 17.9975C0.789854 17.9975 0.00777634 17.1977 0.00333272 15.0871C-0.00111091 11.017 -0.00111091 6.94248 0.00333272 2.87238C0.00777634 0.788447 0.803185 0.00641817 2.9139 0.00197482C5.9489 0.00197482 8.98834 0.00197482 12.0233 0.00197482ZM12.1122 2.24142C9.22829 2.24142 6.34882 2.23254 3.46491 2.25475C3.06499 2.25475 2.38956 1.99259 2.30957 2.49025C2.20293 3.14787 1.91853 3.93878 2.67395 4.5253C5.14905 6.45816 7.57082 8.44878 10.0681 10.3505C11.6234 11.5369 12.3655 11.5147 13.9385 10.355C15.1872 9.4352 16.3647 8.42212 17.5779 7.46236C18.7954 6.50259 19.9952 5.52061 21.2527 4.60973C22.0304 4.04542 21.8082 3.27228 21.7282 2.60133C21.6438 1.88595 20.9417 2.26808 20.5418 2.2592C17.7289 2.22365 14.9206 2.24142 12.1122 2.24142ZM21.7593 7.00469C19.5819 8.74648 17.6045 10.3416 15.6138 11.9235C14.2762 12.9899 12.8365 13.7497 11.0368 13.3498C9.9526 13.1099 9.11276 12.4478 8.26847 11.7857C6.30883 10.2483 4.35364 8.69761 2.23847 7.03135C2.23847 9.9062 2.25181 12.5544 2.22959 15.2071C2.22514 15.767 2.53175 15.767 2.93612 15.767C8.96612 15.7625 14.9917 15.7581 21.0217 15.7759C21.5993 15.7759 21.7815 15.6203 21.7771 15.0294C21.746 12.4478 21.7593 9.86176 21.7593 7.00469Z"
                        fill="white"
                      />
                    </svg>
                    info@bestem.dev
                  </div>
                </Link>
                <Link href="https://discord.gg/8bKWeayDbe">
                  <div className="flex items-center gap-4 transition-all hover:scale-105 hover:font-bold hover:opacity-90">
                    <svg
                      width="26"
                      height="19"
                      viewBox="0 0 26 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.346 15.9267C19.0396 15.5624 18.7982 15.5393 18.4546 15.6869C14.5735 17.3286 10.6784 17.3102 6.77401 15.7653C6.50475 15.6592 6.15656 15.341 5.96157 15.7192C5.71088 16.208 6.34226 16.1434 6.51867 16.374C6.8158 16.7706 7.95321 16.457 7.4936 17.4762C6.7833 19.0488 6.48618 19.1917 5.27448 18.726C3.64959 18.108 2.1222 17.3102 0.696947 16.3187C0.33483 16.0697 0.074849 15.8206 0.0423513 15.3226C-0.245485 10.4619 0.933716 5.98859 3.5846 1.91189C4.23919 0.906551 5.53446 0.943445 6.5326 0.500726C7.01542 0.283979 7.58181 0.26092 8.09713 0.104124C8.73316 -0.0895651 9.23919 -0.0711185 9.41561 0.70825C9.54096 1.26626 9.97736 1.28471 10.4184 1.22476C11.8019 1.03568 13.1807 0.95728 14.5642 1.22937C15.1166 1.34005 15.5437 1.19247 15.7341 0.592959C15.9151 0.0303378 16.2216 -0.0987884 16.8669 0.067231C18.1668 0.39927 19.4342 0.814318 20.683 1.28471C21.0126 1.40922 21.2448 1.61213 21.4537 1.92111C24.2438 6.05777 25.2791 10.6233 24.9402 15.5439C24.9124 15.9405 24.7081 16.1112 24.397 16.3325C22.8836 17.3978 21.2216 18.1633 19.5131 18.8597C18.1575 19.4085 18.0925 18.2187 17.6468 17.5823C17.0201 16.6922 18.0136 16.743 18.385 16.457C18.6496 16.2495 18.9792 16.125 19.346 15.9267ZM10.5762 10.5311C10.6366 9.20752 9.68488 8.02233 8.51032 7.95315C7.27541 7.87937 6.1612 8.99539 6.11477 10.3512C6.06835 11.6932 7.09435 12.9614 8.25962 13.0167C9.49453 13.0721 10.5112 11.9837 10.5762 10.5311ZM18.9003 10.4665C18.8956 9.01383 17.9254 7.92548 16.6533 7.94854C15.4277 7.9716 14.4481 9.06456 14.4481 10.4204C14.4481 11.8131 15.4648 13.0029 16.6719 13.0167C17.9021 13.0352 18.9049 11.8869 18.9003 10.4665Z"
                        fill="#FEFEFF"
                      />
                    </svg>
                    Join our discord server
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <iframe
                src="https://maps.google.com/maps?q=30%20N%20Gould%20St%20Ste%20R%2C%20Sheridan%2C%2082801&amp;t=m&amp;z=4&amp;output=embed&amp;iwloc=near"
                title="30 N Gould St Ste R, Sheridan, 82801"
                aria-label="30 N Gould St Ste R, Sheridan, 82801"
                className="h-44 w-full rounded-3xl grayscale md:h-72"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
