import "./App.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Header from "./components/Header.tsx";
import Slogan from "./components/Slogan.tsx";
import Block1 from "./components/Block1.tsx";
import Block2 from "./components/Block2.tsx";
import Block4 from "./components/Block4.tsx";
import Block3 from "./components/Block3.tsx";
import Block5 from "./components/Block5.tsx";
import Footer from "./components/Footer.tsx";
import { useLayoutEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "./components/loading";
import Block6 from "./components/Block6.tsx";

function App() {
	const [isLabelsLoaded, setIsLabelsLoaded] = useState(false);
	const [positions, setPositions] = useState<any>();
	useLayoutEffect(() => {
		// Initialize AOS
		AOS.init({
			easing: "ease-out-quad",
			duration: 1000,
		});

		// Fetch labels from API
		const fetchLabels = async () => {
			try {
				const [frResponse, enResponse] = await Promise.all([
					fetch("https://api.test.soa-dev.net/api/v1/pages?lang=fr"),
					fetch("https://api.test.soa-dev.net/api/v1/pages?lang=en"),
				]);
				const [frLabels, enLabels] = await Promise.all([
					frResponse.json(),
					enResponse.json(),
				]);
				console.log(frLabels);
				const positionFr = frLabels[0].carte_point;
				const positionEn = enLabels[0].carte_point;
				setPositions({
					fr: positionFr,
					en: positionEn,
				});
				// Initialize i18n with fetched labels
				await i18n.use(initReactI18next).init({
					react: {
						useSuspense: false,
					},
					resources: {
						en: {
							translation: enLabels[0],
						},
						fr: {
							translation: frLabels[0],
						},
					},
					lng: "fr", // Default language
					fallbackLng: "fr",
					interpolation: {
						escapeValue: false,
					},
				});

				setIsLabelsLoaded(true); // Mark labels as loaded
			} catch (error) {
				console.error("Failed to fetch labels:", error);
			}
		};

		fetchLabels();
	}, []);

	if (!isLabelsLoaded) {
		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<LoadingSpinner />
			</div>
		); // Show a loading state until labels are loaded
	}

	return (
		<div className="w-screen min-h-screen overflow-y-hidden">
			<Header />
			<Slogan />
			<div className="px-6 xl:px-[10vw] ">
				<Block1 />
			</div>
			<Block2 positions={positions[i18n.language]} />
			<div className="px-6 xl:px-[10vw] ">
				<Block3 />
				<Block4 />
			</div>
			<Block5 />
			<div className="flex flex-col min-h-screen">
				<Block6 />
				<Footer />
			</div>
		</div>
	);
}

export default App;
