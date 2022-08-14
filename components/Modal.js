import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import portfolioSlides from "../lib/portfolio-slides";
import Image from "next/image";
import ClientOnlyPortal from "../utils/ClientOnlyPortal";
import { useState, useEffect } from "react";

function Arrow(props) {
  return (
    <>
      {props.left && (
        <div className="w-[20px] absolute z-50 top-1/2  translate-x-[-50%] z-2 cursor-pointer left-[20px] bg-theme-400 p-1">
          <svg
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path
              fill="white"
              d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
            />
          </svg>
        </div>
      )}
      {!props.left && (
        <div className="w-[20px] absolute top-1/2  z-50 translate-x-[-50%] z-2 cursor-pointer left-[calc(100%_-_20px)] bg-theme-400 p-1 ">
          <svg
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </div>
      )}
    </>
  );
}

const Modal = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const closeModalHandler = () => {
    props.closeModal();
  };

  return (
    <ClientOnlyPortal selector="#modal">
      <div
        onClick={(e) => {
          console.log("clicked");
        }}
        id="backdrop"
        className=" fixed z-20 top-0 left-0 min-h-[100vh] w-[100vw] bg-theme-200/50"
      >
        <div
          id="modal"
          className=" flex gap-4 z-20 flex-col justify-center bg-theme-400 top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 max-w-[95vw] p-10"
        >
          <div
            className="keen-slider relative min-w-[300px] max-w-[500px]"
            ref={sliderRef}
          >
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </>

            {portfolioSlides.map((e, i) => (
              <div
                key={`${e + i}`}
                className="keen-slider__slide h-[500px] min-w-[300px] max-w-[500px]"
              >
                <Image
                  src={e}
                  alt={`portfolio${i}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <button
            className="bg-theme-300 w-max p-2 text-theme-100"
            type="button"
            onClick={closeModalHandler}
          >
            Close
          </button>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
