import {useTranslation} from "react-i18next";
import RichTextEditor from "./RichTextEditor.tsx";
import paperClip from "../assets/paperclip.svg";
import { useRef } from "react";
import submit from "../assets/submit.svg";

const ContactForm = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePaperClipClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <form onSubmit={() => {}} className="bg-white mt-6">
      <div className="mb-4 flex items-center">
        <label className="block text-gray-700 text-xl w-28" htmlFor="name">
          {t("bloc_2_2.btn_1.0")}:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={t("bloc_2_2.btn_1.1")}
          className="shadow appearance-none border w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline rounded-3xl"
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="block text-gray-700 text-xl w-28" htmlFor="email">
          {t("bloc_2_2.btn_2.0")}:
        </label>
        <input
          type="email"
          name="email"
          id="name"
          placeholder={t("bloc_2_2.btn_2.1")}
          className="shadow appearance-none border w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline rounded-3xl"
          required
        />
      </div>
      <div className="mb-4 flex">
        <label className="block text-gray-700 text-xl w-28" htmlFor="name">
          {t("bloc_2_2.btn_3")}:
        </label>
        <RichTextEditor />
      </div>

      <div className="mb-4 flex items-center">
        <label className="block text-gray-700 text-xl w-28" htmlFor="email">
          {t("bloc_2_2.btn_4.0")}:
        </label>
        <div className="flex items-center cursor-pointer" onClick={handlePaperClipClick}>
          <img src={paperClip} />
          <span className="text-blue-500 font-semibold">{t("bloc_2_2.btn_4.1")}</span>
          <span className="text-gray-400 text-sm ml-2">(*{t("bloc_2_2.btn_4.2")})</span>
        </div>
        <input
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          className="hidden border-2 border-gray-300 p-2 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-x-4 justify-end">
        <div className="mt-4 cursor-pointer text-black px-8 py-2 rounded-3xl bg-white border-solid border-[1px] border-gray-500 flex gap-x-2 items-center">
          {t("bloc_2_2.btn_5")}
        </div>
        <div className="mt-4 cursor-pointer text-white px-8 py-2 rounded-3xl bg-[#F2542D] border-solid border-[1px] border-gray-500 flex gap-x-2 items-center">
          {t("bloc_2_2.btn_6")}
          <img src={submit} alt="Card 2" className="w-5 h-5" />
        </div>
      </div>

    </form>
  );
};

export default ContactForm;
