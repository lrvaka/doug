import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import portfolio1 from "../public/assets/portfolio1.jpeg";
import portfolio2 from "../public/assets/portfolio2.jpeg";
import portfolio3 from "../public/assets/portfolio3.jpeg";
import portfolio4 from "../public/assets/portfolio4.jpeg";
import portfolio5 from "../public/assets/portfolio5.jpeg";
import portfolio6 from "../public/assets/portfolio6.jpeg";
import Image from "next/image";

const animation = { duration: 20000, easing: (t) => t };

const Portfolio = () => {
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
  return (
    <div
      id="portfolio"
      className="relative before:content-[''''] before:absolute before:h-[50%] before:w-[100%] before:bg-theme-300 before:bottom-0 "
    >
      <div className="px-4 lg:px-24 ">
        <div className="keen-slider" ref={sliderRef}>
          <div className="keen-slider__slide h-60 lg:h-96 relative">
            <Image
              src={portfolio1}
              alt="portfolio 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="keen-slider__slide h-60 lg:h-96 relative">
            <Image
              src={portfolio2}
              alt="portfolio 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="keen-slider__slide h-60 lg:h-96 relative">
            <Image
              src={portfolio3}
              alt="portfolio 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="keen-slider__slide h-60 lg:h-96 relative">
            <Image
              src={portfolio4}
              alt="portfolio 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="keen-slider__slide h-60 lg:h-96 relative">
            <Image
              src={portfolio5}
              alt="portfolio 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
