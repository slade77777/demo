import {useTranslation} from "react-i18next";
import './index.css';
import ArrowUpRight from "../ArrowUpRight.tsx";
import {useState} from "react";

const AnimationButton = ({index}: { index: number }) => {
  const [fill, setFill] = useState<string>();
  const {t} = useTranslation();
  return <div>
    <div onMouseEnter={() => setTimeout(() => setFill("white"), 300)} onMouseLeave={() => setFill(undefined)}
         className="mt-4 px-4 py-2 !rounded-3xl border-solid border-[1px] border-gray-500 flex gap-x-2 items-center blob-btn">
      {t(`bloc_1.cases.${index}.cta`)}
      <ArrowUpRight fill={fill}/>
      <span className="blob-btn__inner">
      <span className="blob-btn__blobs">
        <span className="blob-btn__blob"></span>
      </span>
    </span>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -20" result="goo"></feColorMatrix>
          <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
        </filter>
      </defs>
    </svg>
  </div>
}

export default AnimationButton
