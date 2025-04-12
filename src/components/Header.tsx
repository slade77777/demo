import mountain from "../assets/Mountains.svg";
import fishing from "../assets/fishing.svg";
import crosshair from "../assets/Crosshair.svg";
import ArrowUpRight from "../assets/arrow-up-right-white.svg";
import menu from "../assets/menu.svg";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const Header = () => {
	const { t, i18n } = useTranslation();
	const drawer = useRef(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const menuButton = useRef(null);

	function toggleDrawer() {
		setIsDrawerOpen((prev) => !prev);
	}

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (
				drawer.current &&
				!drawer.current?.contains(event.target) &&
				menuButton &&
				!menuButton.current?.contains(event.target)
			) {
				setIsDrawerOpen(false);
			}
		};

		window.addEventListener("click", handleClickOutside);

		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<nav className="bg-[#562C2CB2] backdrop-blur-sm text-white px-4 py-2 fixed left-0 top-0 z-20 w-screen">
			<div className="container mx-auto flex items-center justify-between lg:px-[10vw]">
				<div className="flex items-center">
					<p className="text-xl">LOGO SAMPLE</p>
				</div>

				{/* Center Section: Navigation Links */}
				<ul className="hidden md:flex space-x-8 text-sm font-medium">
					<li className="hover:text-[#F2542D] cursor-pointer">
						{t("banner_menu.0")}
					</li>
					<li className="hover:text-[#F2542D] cursor-pointer">
						{t("banner_menu.1")}
					</li>
					<li className="hover:text-[#F2542D] cursor-pointer">
						{t("banner_menu.2")}
					</li>
				</ul>

				{/* Right Section: Icons and Button */}
				<div className="flex items-center space-x-4">
					{/* Icons */}
					<div className="hidden md:flex space-x-4">
						<img
							src={mountain}
							alt="Icon 1"
							className="h-5 w-5 cursor-pointer"
						/>
						<img
							src={fishing}
							alt="Icon 2"
							className="h-5 w-5 cursor-pointer"
						/>
						<img
							src={crosshair}
							alt="Icon 3"
							className="h-5 w-5 cursor-pointer"
						/>
					</div>
					<div className="flex">
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							className={`mr-2 cursor-pointer ${i18n.language === "fr" ? "text-orange-500" : "text-white"}`}
							onClick={() => i18n.changeLanguage("fr")}
						>
							FR
						</div>
						|{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							className={`ml-2 cursor-pointer ${i18n.language === "en" ? "text-orange-500" : "text-white"}`}
							onClick={() => i18n.changeLanguage("en")}
						>
							EN
						</div>
					</div>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2">
						<img src={ArrowUpRight} alt="Icon" className="h-4 w-4" />
					</button>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						ref={menuButton}
						className="block md:hidden p-2 rounded-md"
						aria-hidden="true"
						onClick={toggleDrawer}
					>
						<img alt="" src={menu} className="h-5 w-5 cursor-pointer" />
					</div>
				</div>
			</div>
			<div
				ref={drawer}
				className={`lg:hidden fixed top-12 z-20 left-0 w-4/5 h-[calc(100vh-3rem)] bg-[#5c4033] transform transition-transform duration-300 ease-in-out overflow-y-auto ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div className="flex flex-col">
					<div className="text-white uppercase w-full p-4 border-b-cyan-600 border-b-[1px] border-solid font-md text-sm">
						{t("banner_menu.0")}
					</div>
					<div className="text-white uppercase w-full p-4 border-b-cyan-600 border-b-[1px] border-solid font-md text-sm">
						{t("banner_menu.1")}
					</div>
					<div className="text-white uppercase w-full p-4 border-b-cyan-600 border-b-[1px] border-solid font-md text-sm">
						{t("banner_menu.2")}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
