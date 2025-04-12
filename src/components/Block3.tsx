import Calendar from "./calendar";
import {useTranslation} from "react-i18next";
import ContactForm from "./ContactForm.tsx";

const Block3 = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-12">
      <div className="flex flex-row w-full items-center justify-between">
        <div className="bg-gray-500 h-[1px] w-1/3" />
        <h1 className="text-4xl font-bold text-[#F2542D] text-center">{t("bloc_2_2.title")}</h1>
        <div className="bg-gray-500 h-[1px] w-1/3" />
      </div>
      <Calendar />
      <ContactForm />
    </div>
  );
}

export default Block3
