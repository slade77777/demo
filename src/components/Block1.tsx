import menu1 from "../assets/part1.png";
import menu2 from "../assets/part2.png";
import menu3 from "../assets/part3.png";
import arrow from "../assets/ArrowUpRight.svg";
import { useTranslation } from "react-i18next";

const data = [
	{
		icon: menu1,
	},
	{
		icon: menu2,
	},
	{
		icon: menu3,
	},
];

const Block1 = () => {
	const { t } = useTranslation();
	return (
		<section className="text-center py-10" data-aos="flip-up">
			<div className="flex flex-row w-full items-center justify-between">
				<div className="bg-gray-500 h-[1px] w-1/3" />
				<h1 className="text-4xl font-bold text-[#F2542D]">{t("bloc_1.title")}</h1>
				<div className="bg-gray-500 h-[1px] w-1/3" />
			</div>
			<p className="text-lg text-gray-600 mt-2">{t("bloc_1.subtitle")}</p>
			<div className="flex flex-col md:flex-row justify-center gap-6 mt-8 items-center">
				{data.map((item, index) => (
					<div
						className={`bg-white rounded-lg overflow-hidden w-80 flex flex-col items-start ${index === 1 ? "lg:mt-0" : "lg:mt-20"}`}
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
					>
						<img
							src={item.icon}
							alt="Card 1"
							className="w-full h-80 object-cover"
						/>
						<div className="py-4">
							<h3 className="text-xl font-bold text-left text-[#F2542D]">
								{t(`bloc_1.cases.${index}.category`)}
							</h3>
							<p className="text-gray-600 mt-2 text-left">
								{t(`bloc_1.cases.${index}.cta`)}
							</p>
							<p className="text-gray-600 mt-2 text-left line-clamp-2">
								{t(`bloc_1.cases.${index}.description`)}
							</p>
							<div className="mt-4 text-black hover:text-white px-4 py-2 rounded-3xl bg-white hover:bg-[#F2542D] border-solid border-[1px] border-gray-500 flex gap-x-2 items-center">
								{t("forfait")} {index + 1}
								<img src={arrow} alt="Card 2" className="w-5 h-5" />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Block1;
