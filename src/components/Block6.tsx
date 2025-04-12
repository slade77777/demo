import footer from "../assets/footer.png";
import {useTranslation} from "react-i18next";

const Block6 = () => {
  const {t} = useTranslation();

  return <section className="w-screen bg-contain h-[50vh] xl:h-[80vh] bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${footer})` }} data-aos="flip-up">
    <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-black">
        {t("bloc_6.title")}
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-[#562C2C80]">
        {t("bloc_6.subtitle")}
      </h2>
      <p className="mt-4 text-lg md:text-xl max-w-2xl text-black">
        {t("bloc_6.text")}
      </p>
      <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">
        {t("bloc_6.button")}
      </button>
    </div>
  </section>
}

export default Block6;
