import Image from "next/image";
import heroImg from "../public/assets/heroImg.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col pt-[50px] gap-14 justify-center px-4 lg:flex-row">
      <div className="flex flex-col gap-10 justify-center">
        <div className="flex gap-4 flex-col">
          <h1 className="text-6xl font-bold lg:text-7xl">
            Bathroom Needs a{" "}
            <span className="relative">
              Makeover?{" "}
              <svg
                className="absolute bottom-0 right-0 translate-y-1/2 w-50 h-5 lg:h-6"
                viewBox="0 0 570 34"
              >
                <path
                  d="M241.8 3.98147C215.053 5.05207 188.62 6.36848 162.843 7.80765C126.353 9.84356 89.8776 11.9497 53.6217 15.2843C42.2092 16.3374 30.6197 17.0043 19.2785 18.3206C12.1592 19.1455 2.71918 20.3212 1.4803 20.567C0.832313 20.7074 0.549619 20.9182 0.458273 20.9884C-0.184004 21.4798 -0.0668122 21.9535 0.295718 22.322C0.4413 22.48 0.809436 22.8663 1.83137 22.9189C70.1754 26.5169 140.061 19.4965 208.488 18.7594C327.152 17.4957 449.413 22.5153 567.135 33.467C568.163 33.5548 569.162 33.1159 569.305 32.4665C569.476 31.8347 568.734 31.2204 567.706 31.1326C449.784 20.1633 327.323 15.1262 208.43 16.4074C144.66 17.0919 79.6297 23.2524 15.7702 21.1463C17.2374 20.9708 18.6762 20.7952 19.9893 20.6372C31.2848 19.3209 42.8258 18.6716 54.1927 17.6185C90.3715 14.2839 126.773 12.1778 163.214 10.1594C208.431 7.63208 255.616 5.45576 303.173 4.43781C320.187 4.59577 337.143 4.75379 354.099 4.94685C390.78 5.36807 427.633 6.59664 464.228 8.24643C475.247 8.7554 486.265 9.28188 497.284 9.73821C500.938 9.89616 510.358 10.3524 511.671 10.3173C513.298 10.2822 513.612 9.43984 513.641 9.29943C513.726 8.98352 513.669 8.54472 512.87 8.17615C512.784 8.1235 512.27 7.94788 511.128 7.84258C444.589 1.62957 373.539 0.594226 303.231 2.08605C229.069 1.43667 154.622 1.15573 80.6488 0.857361C79.5898 0.857361 78.7248 1.38396 78.7163 2.03335C78.7106 2.68273 79.564 3.20935 80.623 3.2269C134.186 3.43751 188.02 3.648 241.8 3.98147Z"
                  fill="#427E82"
                />
              </svg>
            </span>
          </h1>
          <h2 className="text-xl lg:text-2xl">
            Get in contact with <span className="font-bold">THE</span> bathroom
            specialist today!
          </h2>
        </div>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-theme-400 text-theme-100 p-2 font-medium text-xl flex gap-2"
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
          <a
            href="#portfolio"
            className="border border-theme-400 text-theme-400 p-2 font-medium text-xl "
          >
            View Portfolio
          </a>
        </div>
      </div>
      <motion.div
        initial={{
          y: 100,
          clipPath: "inset(84% 35% 0 35%)",
        }}
        animate={{
          y: 0,
          clipPath: "inset(0% 0% 0 0%)",
        }}
        transition={{
          duration: 1,
          type: "spring",
        }}
        className="hidden lg:block lg:min-w-[600px]"
      >
        <Image src={heroImg} alt="hero display" />
      </motion.div>
    </div>
  );
};

export default Hero;
