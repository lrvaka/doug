import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import portfolioSlides from "../lib/portfolio-slides";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

const animation = { duration: 20000, easing: (t) => t };

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free",
    initial: 0,
    created(s) {
      s.moveToIdx(10, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
    slides: {
      perView: 2.5,
      spacing: 15,
    },
  });

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <div
      id="portfolio"
      className="relative before:content-[''''] before:absolute before:h-[50%] before:w-[100%] before:bg-theme-300 before:bottom-0 "
    >
      <div className="px-4 lg:px-24">
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="keen-slider relative cursor-pointer"
          ref={sliderRef}
        >
          <motion.svg
            transition={{ duration: 10 }}
            whileInView={{
              rotate: [0, 30, 0, 30, 0, 30, 0],
              opacity: [1, 1, 1, 1, 0],
            }}
            className="absolute right-0 bottom-0 z-10"
            width="71"
            height="75"
            viewBox="0 0 71 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.1743 44.2893L17.0264 21.282C16.5514 20.2052 16.5237 18.9838 16.9493 17.8866C17.3749 16.7893 18.2189 15.9061 19.2957 15.4311C20.3725 14.9562 21.5939 14.9284 22.6911 15.354C23.7884 15.7796 24.6717 16.6236 25.1466 17.7004L34.1006 38.0009M33.5037 36.6476L31.1159 31.2341C30.641 30.1573 30.6132 28.9359 31.0388 27.8387C31.4644 26.7414 32.3084 25.8582 33.3852 25.3832C34.462 24.9083 35.6834 24.8805 36.7807 25.3061C37.8779 25.7317 38.7612 26.5757 39.2361 27.6525L42.2208 34.4193M40.43 30.3592C39.9551 29.2824 39.9273 28.0611 40.3529 26.9638C40.7785 25.8665 41.6225 24.9833 42.6993 24.5083C43.7761 24.0334 44.9975 24.0057 46.0948 24.4312C47.192 24.8568 48.0753 25.7008 48.5502 26.7776L50.341 30.8377"
              stroke="white"
            />
            <path
              d="M49.7441 29.4845C49.2691 28.4077 49.2414 27.1863 49.667 26.089C50.0926 24.9918 50.9366 24.1085 52.0134 23.6336C53.0902 23.1586 54.3116 23.1309 55.4088 23.5565C56.5061 23.982 57.3894 24.8261 57.8643 25.9029L63.2367 38.0832C65.1365 42.3904 65.2475 47.2759 63.5451 51.6649C61.8428 56.054 58.4667 59.587 54.1595 61.4868L48.746 63.8745L49.309 63.6262C46.6196 64.813 43.6776 65.3132 40.7471 65.082C37.8166 64.8508 34.9894 63.8955 32.5194 62.3017L31.6307 61.7237C30.2144 60.7996 24.9714 56.9397 15.8979 50.1425C14.973 49.4497 14.3548 48.4233 14.175 47.2817C13.9951 46.1401 14.2677 44.9733 14.9347 44.0296C15.6451 43.0239 16.6711 42.2844 17.8497 41.9286C19.0284 41.5727 20.2922 41.6209 21.4404 42.0655L27.1743 44.2894M7.1154 20.8036L3.21479 19.2908M9.18413 32.8244L6.47739 34.0183M31.476 10.0588L32.9889 6.15822M37.7644 16.9852L40.4711 15.7913"
              stroke="white"
            />
          </motion.svg>
          {portfolioSlides.map((e, i) => (
            <div
              key={`${e + i}`}
              className="keen-slider__slide h-60 lg:h-96 relative"
            >
              <Image src={e} alt={`${e + i}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
        {open && <Modal closeModal={closeModalHandler} />}
      </div>
    </div>
  );
};

export default Portfolio;
