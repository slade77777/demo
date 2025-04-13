import icecream from '../assets/icecream.png'
import c1 from '../assets/container.svg'
import c2 from '../assets/c2.svg'
import c3 from '../assets/container (2).svg'
import c4 from '../assets/c4.svg'
import c5 from '../assets/Footer icon.svg'
import fruit from '../assets/block5-0.png'
import fruit1 from '../assets/block5-1.png'
import fruit2 from '../assets/block5-2.png'
import fruit3 from '../assets/block5-3.png'
import fruit4 from '../assets/block5-4.png'
import instagram from '../assets/instagram.svg'
import arrow from '../assets/ArrowUpRight.svg'
import {useTranslation} from "react-i18next";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const block4 = [
  {icon: c2},
  {icon: c1},
  {icon: c4},
  {icon: c3},
  {icon: c5},
]

const block5 = [
  {img: fruit1},
  {img: fruit2},
  {img: fruit3},
  {img: fruit4},
]

const Block5 = () => {
  const {t} = useTranslation()
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="py-10 px-4 md:px-[10vw]" data-aos="flip-up">
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center relative">
          {/* Left Content */}
          <div className="absolute md:relative md:w-3/5 px-4 bg-white bg-opacity-50 left-4 right-4">
            <h1 className="text-4xl font-bold text-[#F2542D] leading-tight">
              {t('bloc_4.title')}{" "}
              <span className="text-orange-400">{t('bloc_4.subtitle')}</span>
            </h1>
            <div className="mt-6 flex">
              <div className="h-[1px] bg-gray-500 w-16 mt-4 mr-4" />
              <div className="">
                <h2 className="text-3xl font-semibold mb-4 text-black">{t('bloc_4.text_title')}</h2>
                <p className="text-gray-600">
                  {t('bloc_4.text')}
                </p>
              </div>
            </div>

          </div>
          {/* Right Image */}
          <div className="md:w-2/5">
            <img
              src={icecream}
              alt="icecream"
              className="rounded-lg shadow-lg w-full h-[700px] md:h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white md:px-[10vw]" data-aos="flip-up">
        <div className="flex justify-center flex-wrap">
          {block4.map((feature, index) => (
            <div
              key={index}
              className="w-1/2 md:w-1/3 lg:w-1/5 flex flex-col items-center text-center"
            >
              <div className="bg-[#0E9594] rounded-full p-4"><img src={feature.icon} className="w-12 h-12"/></div>
              <h3 className="text-lg font-semibold mt-2 text-black">{t(`bloc_4.pictos.${index}.title`)}</h3>
              <p className="text-gray-500">{t(`bloc_4.pictos.${index}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-10 px-6 md:px-20 lg:px-[10vw] bg-blue-50" data-aos="flip-up">
        {/* Left Content */}
        <div className="flex flex-col-reverse md:flex-row md:gap-x-10 items-center">
          <p className="text-gray-600 md:w-1/2">
            {t("bloc_5.text")}
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mt-6 md:w-1/2">
            {t("bloc_5.title")}
          </h2>
        </div>

        {/* Right Image */}
        <div className="relative mt-12">
          <img
            src={fruit}
            alt="Family"
            className="rounded-lg shadow-lg w-full h-auto md:h-[80vh] object-cover"
          />
          <div className="absolute flex flex-col justify-end bottom-4 top-4 left-4 right-4 md:bottom-[10vh] md:top-[10vh] md:left-[5vw] md:right-[5vw] bg-white bg-opacity-40 rounded-lg shadow-lg border-white border-solid border-8">
            <div className="bg-white p-4">
              <div className="flex flex-row justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-black">{t('bloc_5.reviews.0.author')}</h3>
                <p className="text-black">{dayjs(t('bloc_5.reviews.0.date'), "DD/MM/YYYY").format("DD MMM YYYY")}</p>
              </div>
              <p className="text-gray-600 mb-4">
                {t('bloc_5.reviews.0.review')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 px-6 md:px-20 lg:px-[10vw]" data-aos="flip-up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {block5.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
              <div
                className="absolute cursor-pointer bottom-0 left-0 right-0  rounded-b-3xl bg-black bg-opacity-50 text-white p-4 flex justify-between items-center ">
                <div className="flex gap-x-2">
                  <img src={instagram} className="w-5 h-5"/>
                  <span>{t(`bloc_5.reviews.${index + 1}.author`)}</span>
                </div>
                <div className="hover:bg-[#333333] rounded-full p-2">
                  <img src={arrow} className="w-5 h-5"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 text-center" data-aos="flip-up">
        <p className="text-gray-600 text-xl">
          {t("bloc_5.footer")}
        </p>
      </footer>
    </div>
  );
};

export default Block5;
