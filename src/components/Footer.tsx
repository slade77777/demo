import fb from "../assets/Facebook icon.svg";
import yu from "../assets/youtube.svg";
import insta from "../assets/instagram.svg";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer className="bg-[#562C2C] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">{t("footer.address.name")}</h3>
            <p className="mt-2">{t("footer.address.phone")}</p>
            <p>{t("footer.address.location")}</p>
          </div>

          <div className="flex flex-col items-center md:items-start text-gray-500">
            <ul className="mt-2 space-y-1 text-center md:text-left">
              <li>{t("footer.links.0.name")}</li>
              <li>{t("footer.links.1.name")}</li>
              <li>{t("footer.links.2.name")}</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-gray-500">
            <ul className="mt-2 space-y-1 text-center md:text-left">
              <li>{t("footer.links.3.name")}</li>
              <li>{t("footer.links.4.name")}</li>
              <li>{t("footer.links.5.name")}</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-gray-500">
            <ul className="mt-2 space-y-1 text-center md:text-left">
              <li>{t("footer.links.6.name")}</li>
              <li>{t("footer.links.7.name")}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-red-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© BASIC 2024</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="bg-orange-500 rounded-full p-2">
              <img src={fb} className="w-5 h-5"/>
            </a>
            <a href="#" className="bg-orange-500 rounded-full p-2">
              <img src={insta} className="w-5 h-5"/>
            </a>
            <a href="#" className="bg-orange-500 rounded-full p-2">
              <img src={yu} className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
