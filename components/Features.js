import Image from "next/image";
import { motion } from "framer-motion";
import servicesImg1 from "../public/assets/servicesImg1.png";
import servicesImg2 from "../public/assets/servicesImg2.png";
import servicesImg3 from "../public/assets/servicesImg3.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Features = () => {
  return (
    <div className="mt-24 px-4">
      <h3 className="text-center text-3xl text-theme-300 font-bold lg:text-4xl">
        Doug Does It All
      </h3>
      <p className="text-center lg:text-lg">
        My wide array of experience has lead me to be capable of all things
        bathroom
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col  gap-6  text-theme-100 mt-12 lg:flex-row"
      >
        <motion.div
          variants={item}
          className=" flex-1 bg-theme-400 p-10 flex flex-col text-center gap-4"
        >
          <div className="self-center max-w-[80px]">
            <Image src={servicesImg1} alt="features 1" />
          </div>
          <p className="lg:text-lg">
            As a plumber by trade, I have all the necessary knowledge to make
            even the most drastic changes to a bathroom possible
          </p>
        </motion.div>
        <motion.div
          variants={item}
          className=" flex-1 bg-theme-400 p-10 flex flex-col text-center gap-4"
        >
          <div className="self-center max-w-[80px]">
            <Image src={servicesImg2} alt="features 2" />
          </div>
          <p className="lg:text-lg">
            Experience in tiling, drywall, painting, carpentry, electrical and
            more. So I can handle every aspect of the remodeling/renovation process
          </p>
        </motion.div>
        <motion.div
          variants={item}
          className=" flex-1 bg-theme-400 p-10 flex flex-col text-center gap-4"
        >
          <div className="self-center max-w-[100px]">
            <Image src={servicesImg3} alt="features 3" />
          </div>
          <p className="lg:text-lg">
            Efficient, reliable, and unique. I always work to ensure that my
            clients are happy with the end result from how it looks to how its
            done
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
