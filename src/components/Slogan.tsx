import heroVideo from "../assets/hero.mov";
import mountain from "../assets/Mountains (1).svg";
import fishing from "../assets/fishing(1).svg";
import crosshair from "../assets/Crosshair-32px.svg";
import chat from "../assets/Chats icon.svg";
import { useTranslation } from "react-i18next";
import "./Slogan.css";

const Item = ({ logo, index }: { logo: string; index: number }) => {
	const { t } = useTranslation();
	return (
		<div className="activity-card cursor-pointer ">
			<div className="light" />
			<div className="mt-4 flex justify-center">
				<img src={logo} alt="Tree Icon" />
			</div>
			<p className="text">
				{t("activity")} {index}
			</p>
		</div>
	);
};

const Slogan = () => {
	return (
		<div className="relative w-full bg-gray-100">
			<video
				src={heroVideo}
				className="w-full h-screen md:h-[70vh] xl:h-[130vh] object-cover"
				autoPlay
				loop={false}
				muted
			/>

			{/* Toolbar */}
			<div className="absolute bottom-0 left-0 lg:left-[15vw] w-full lg:w-[70%] bg-transparent bg-opacity-50 text-white">
				<div className="flex justify-between items-center px-4 relative">
					{/* Icon 1 */}
					<Item logo={mountain} index={1} />
					<Item logo={fishing} index={2} />
					<Item logo={crosshair} index={3} />
				</div>
			</div>
			<div className="absolute right-2 bottom-2 md:right-8 md:bottom-8 xl:right-40 xl:bottom-16 z-20 flex">
				<span className="text-2xl bg-red-500 p-2 rounded-full">
					<img src={chat} alt="Tree Icon" className="h-8 w-8" />
				</span>
			</div>
		</div>
	);
};

export default Slogan;
