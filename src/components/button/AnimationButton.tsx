import {useTranslation} from "react-i18next";
import './index.css';
import ArrowUpRight from "../ArrowUpRight.tsx";
import {useState} from "react";

const AnimationButton = ({index}: { index: number }) => {
  const [fill, setFill] = useState<string>();
  const {t} = useTranslation();
  return <div onMouseEnter={() => setTimeout(() => setFill("white"), 300)} onMouseLeave={() => setFill(undefined)}
              className="mt-4 px-4 py-2 !rounded-3xl border-solid border-[1px] border-gray-500 flex gap-x-2 items-center btn-animation">
    {t(`bloc_1.cases.${index}.cta`)}
    <ArrowUpRight fill={fill}/>
  </div>
}

export default AnimationButton
