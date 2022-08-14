import Head from "next/head";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import dougPic from "../public/assets/dougPic.png";
import Features from "../components/Features";
import { motion } from "framer-motion";

import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5 },
      opacity: { duration: 2 },
    },
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doug&apos;ll Do It: Bathroom Renovation and Remodeling</title>
        <link rel="icon" href="/logo.ico" />
        <link rel="canonical" href="https://www.douglldoit.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hi I'm Doug, and I am a bathroom renovation and remodeling expert"
        />
        <meta
          property="og:title"
          content="Doug'll Do It: Bathroom Renovation and Remodeling"
        />
        <meta
          property="og:description"
          content="Hi I'm Doug, and I am a bathroom renovation and remodeling expert"
        />
        <meta
          property="og:image"
          content="https://www.douglldoit.com/assets/twitter.png"
        />
        <meta property="og:image:alt" content="Doug'll Do It" />
        <meta property="og:url" content="https://www.douglldoit.com" />
        <meta
          name="twitter:card"
          content="https://www.douglldoit.com/assets/twitter.png"
        />
        <meta
          name="twitter:title"
          content="Doug'll Do It: Bathroom Renovation and Remodeling"
        />
        <meta
          name="twitter:description"
          content="Hi I'm Doug, and I am a bathroom renovation and remodeling expert"
        />
        <meta
          property="twitter:image"
          content="https://www.douglldoit.com/assets/twitter.png"
        />
        <meta property="twitter:image:alt" content="Doug'll Do It" />
      </Head>
      <header className="max-w-screen-xl mx-auto py-4 flex justify-between px-4">
        <div className="w-32 sm:w-40">
          <Image src={logo} alt="doug'll do it for you" />
        </div>
        <nav className="flex items-center">
          <ul className="flex gap-8 text-lg font-semibold lg:text-xl">
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className=" max-w-7xl mx-auto ">
        <Hero />
        <div className="mt-52 flex flex-col lg:flex-row">
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
              clipPath: "inset(84% 35% 0 35%)",
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              clipPath: "inset(0% 0% 0 0%)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            className="max-w-max self-center lg:min-w-[500px] lg:mr-[-50px]"
          >
            <Image src={dougPic} alt="picture of the owner, Doug" />
          </motion.div>
          <div className="bg-[#EEEEEE] py-20 px-4 flex flex-col lg:px-24 gap-6">
            <h2 className="text-4xl font-bold lg:text-5xl">
              Who Else, But <span className=" text-theme-300">Doug</span>?
            </h2>
            <p className="lg:text-lg">
              Hi, my name is Douglas. I specialize in transforming bathrooms and
              have decades of experience renovating home spaces. I am a
              pipefitter by trade and have many more capabilities beyond that.
              Bathroom remodeling/renovations is a passion of mine because it
              can be such a transformative space in a home. I love taking old,
              outdated bathrooms and breathe new life into them. My attention to
              detail and years of experience ensure that every bathroom I work
              on is done to the highest standards. If you&apos;re thinking about
              updating your bathroom, please get in touch - I would love to help
              you create the bathroom of your dreams.
            </p>
            <a
              href="#contact"
              className="bg-theme-400 text-theme-100 p-2 font-medium text-xl flex gap-2 w-max"
            >
              Contact Now
              <svg
                className="w-4 h-4 self-center"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.25 1.25L22 10L13.25 18.75M2 10H22H2Z"
                  stroke="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <Features />
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
            clipPath: "inset(84% 35% 0 35%)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0% 0 0%)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="mt-24"
        >
          <Portfolio />
        </motion.div>
        <div className="my-24 px-4 text-5xl font-extrabold flex flex-col gap-6 text-theme-400 lg:text-7xl lg:max-w-xl mx-auto">
          <h2 className="">Need Remodeling or Renovating?</h2>
          <h2>
            Doug&apos;ll <br />
            Do It
          </h2>
          <div
            id="contact"
            className="text-xl bg-theme-300 text-theme-100 p-4 text-center font-medium lg:text-2xl"
          >
            Call/Text @ (440) 220-1939
          </div>
        </div>
      </div>
    </div>
  );
}
