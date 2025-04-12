import bg from "../assets/map-bg.png";
import mountain from "../assets/m1.svg";
import fishing from "../assets/m2.svg";
import sample from "../assets/sample.png";
import crosshair from "../assets/m3.svg";
import mapPin from "../assets/MapPin.svg";
import mapPin1 from "../assets/MapPin (1).svg";
import mapPin2 from "../assets/MapPin (2).svg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L, { divIcon } from "leaflet";

const menu = [
	{
		icon: mountain,
	},
	{
		icon: fishing,
	},
	{
		icon: crosshair,
	},
];

type Coordinate = {
	latitude: number;
	longitude: number;
};

function convertDMSToDecimal(degrees: string, minutes: string): number {
	const deg = Number.parseFloat(degrees);
	const min = Number.parseFloat(minutes) / 60;
	return deg + min;
}

function convert({
	latitude,
	longitude,
}: { latitude: string; longitude: string }) {
	if (!latitude.includes("°") || !longitude.includes("°"))
		return { latitude, longitude };
	const [latDeg, latMin] = latitude
		.split("°")
		.map((part) => part.trim().replace("'", ""));
	const [longDeg, longMin] = longitude
		.split("°")
		.map((part) => part.trim().replace("'", ""));

	const latDecimal = convertDMSToDecimal(latDeg, latMin);
	const longDecimal = convertDMSToDecimal(longDeg, longMin);
	return { latitude: latDecimal, longitude: longDecimal };
}

const MapUpdater = ({
	zoom,
	lat,
	lng,
}: { zoom: number; lat: number; lng: number }) => {
	const map = useMap();
	map.setView({ lat, lng }, zoom);
	return null;
};

const CustomZoomControl = ({
	setZoom,
}: { setZoom: (zoom: number) => void }) => {
	const map = useMap();

	useEffect(() => {
		const zoomControl = L.control.zoom({ position: "topright" }); // Set position to top-right
		zoomControl.addTo(map);

		return () => {
			map.removeControl(zoomControl); // Clean up on unmount
		};
	}, [map]);

	useEffect(() => {
		const handleZoomEnd = () => {
			setZoom(map.getZoom()); // Update zoom state
		};

		map.on("zoomend", handleZoomEnd); // Listen for zoom changes

		return () => {
			map.off("zoomend", handleZoomEnd); // Clean up on unmount
		};
	}, [map, setZoom]);

	return null;
};

const CustomMarker = ({
	cor,
	handleMarkerClick,
}: { cor: any; handleMarkerClick: any }) => {
	const { t } = useTranslation();
	const iconMap = () => {
		switch (cor.activities[0]) {
			case t("bloc_2.cases.0"):
				return mapPin;
			case t("bloc_2.cases.1"):
				return mapPin1;
			case t("bloc_2.cases.2"):
				return mapPin2;
			default:
				return mapPin;
		}
	};

	const customIcon = divIcon({
		html: `<img src="${iconMap()}" class="w-12 h-12" />`,
		className: "custom-marker",
		iconSize: [40, 40],
	});
	return (
		<Marker
			eventHandlers={{
				click: () =>
					handleMarkerClick([
						Number.parseFloat(cor.cor.latitude),
						Number.parseFloat(cor.cor.longitude),
					]),
			}}
			position={[
				Number.parseFloat(cor.cor.latitude),
				Number.parseFloat(cor.cor.longitude),
			]}
			icon={customIcon}
		>
			<Popup>
				<p>
					{cor.name} - {cor.activities?.join(", ")}
				</p>
			</Popup>
		</Marker>
	);
};

const Block2 = ({ positions }: { positions: any }) => {
	const { t } = useTranslation();
	const [data, setData] = useState<any>();
	const [zoom, setZoom] = useState(5);
	const [center, setCenter] = useState<Coordinate>();
	useEffect(() => {
		const cors = positions
			?.filter((item: any) => item.coordinates)
			.map((item: any) => {
				return {
					...item,
					cor: convert(item.coordinates),
				};
			});
		setCenter(cors[1]?.cor);
		setData(cors);
	}, [positions]);

	function handleMarkerClick([lat, long]: [lat: number, long: number]) {
		setCenter({ latitude: lat, longitude: long });
		setZoom((zoom) => zoom + 1);
	}

	if (!data) return null;

	return (
		<div
			className="bg-[#FFF6F4] p-8 lg:px-[10vw]"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="flex flex-row w-full items-center justify-between">
				<div className="bg-gray-500 h-[1px] w-1/3" />
				<p className="text-center text-[#F2542D] text-3xl font-bold uppercase">
					{t("bloc_2.title")}
				</p>
				<div className="bg-gray-500 h-[1px] w-1/3" />
			</div>
			<div className="flex gap-x-8 items-center justify-center mt-8 flex-wrap gap-y-4">
				{menu.map((item, index) => {
					return (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className="flex flex-row items-center rounded-3xl hover:bg-[#F2542D99] md:rounded-[40px] gap-x-2 lg:gap-x-4 border-solid border-2 border-gray-500 hover:bg-[#F2542D] p-2 md:p-4"
						>
							<img
								src={item.icon}
								alt="icon"
								className="w-5 h-5 lg:w-7 lg:h-7"
							/>
							<p className="text-black font-semibold text-md md:text-xl">
								{t(`bloc_2.cases.${index}`)}
							</p>
						</div>
					);
				})}
			</div>
			<div className="h-[600px] w-full mt-8 relative">
				<div className="absolute top-2 left-2 flex gap-x-2 z-20 items-center backdrop-blur-sm rounded bg-[#3333331A] p-2">
					<img src={sample} alt="sample" className="w-8 h-8" />
					<p>Emplacement</p>
				</div>
				<MapContainer
					style={{ height: "600px", width: "100%", zIndex: 1 }}
					center={[center?.latitude || 0, center?.longitude || 0]}
					zoom={zoom}
					zoomControl={false}
				>
					<MapUpdater
						zoom={zoom}
						lat={center.latitude}
						lng={center.longitude}
					/>
					<CustomZoomControl setZoom={setZoom} />
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{data.map((cor: any, index: number) => (
						<CustomMarker
							cor={cor}
							key={index}
							handleMarkerClick={handleMarkerClick}
						/>
					))}
				</MapContainer>
			</div>
		</div>
	);
};

export default Block2;
