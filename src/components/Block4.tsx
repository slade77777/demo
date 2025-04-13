import menu1 from '../assets/image4-0.png';
import menu2 from '../assets/image4-1.png';
import menu3 from '../assets/image4-2.png';
import menu4 from '../assets/image4-3.png';
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import arrowRightWhite from "../assets/arrow-right-white.svg";
import ArrowRight from "./ArrowRight.tsx";
import '../css/block4.css';

const data = [
  {
    image: menu1,
  },
  {
    image: menu2,
  },
  {
    image: menu3,
  },
  {
    image: menu4,
  },
]


const Block4 = () => {

  const {t} = useTranslation();
  const slideshowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideshowRef.current) {
        const {scrollLeft, scrollWidth, clientWidth} = slideshowRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft >= maxScrollLeft) {
          slideshowRef.current.scrollTo({left: 0, behavior: 'smooth'});
        } else {
          slideshowRef.current.scrollBy({
            left: clientWidth,
            behavior: 'smooth',
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isDisappearing, setIsDisappearing] = useState(false);

  const handleMouseEnter = () => {
    setIsDisappearing(true);
    setTimeout(() => {
      setIsHovered(true);
      setIsDisappearing(false);
    }, 300); // Match the animation duration
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return <section className="p-6 xl:p-0 xl:mt-16" data-aos="flip-up">
    <div className="flex items-center justify-between">
      <h2 className="text-center text-3xl font-bold md:text-left text-[#F2542D]">{t('bloc_3.title')}</h2>
      <div
        className="hidden md:flex items-center cursor-pointer border-b-[1px] border-[#666666] hover:border-[#F2542D] text-[#666666] hover:text-[#F2542D] relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="text-xl text-left">{t("bloc_3.more_info")}</p>
        <div className="relative w-6 h-6">
          {!isHovered && (
            <div
              className={`absolute top-0 left-0 ${
                isDisappearing ? "animate-move-out" : ""
              }`}
            >
              <ArrowRight fill="#666666" />
            </div>
          )}
          {isHovered && (
            <div className="absolute top-0 left-[-100%] animate-slide-in">
              <ArrowRight fill="#F2542D" />
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="px-0 xl:px-12 py-8 xl:py-8 mt-8">
      <div className="flex overflow-hidden w-full gap-x-8" ref={slideshowRef}>
        {data?.map((item, index) => (
          <div
            className="flex-none relative w-full md:w-[calc(40%-30px)] xl:w-[calc(35%-30px)] bg-white rounded-xl"
            key={index}
          >
            <img
              src={item.image}
              alt="Content 1"
              className="w-full h-72 xl:h-[20vw] object-cover rounded-xl"
            />
            <div className="p-4">
              <p className="text-2xl text-[#F2542D]">{t(`bloc_3.cases.${index}.category`)}</p>
              <p className="text-3xl font-semibold text-black mt-2">{t(`bloc_3.cases.${index}.tagline`)}</p>
              <p
                className="text-gray-600 mt-2 border-l-[1px] pl-4 border-gray-600">{t(`bloc_3.cases.${index}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div
      className=" mt-4 cursor-pointer text-white px-8 py-2 rounded-3xl bg-[#F2542D] border-solid border-[1px] border-gray-500 flex md:hidden gap-x-2 items-center justify-center">
      {t("bloc_3.more_info")}
      <img src={arrowRightWhite} alt="Card 2" className="w-5 h-5"/>
    </div>
  </section>
}

export default Block4
