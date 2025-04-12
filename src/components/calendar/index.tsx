import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import { isDateInList } from "../../function.ts"; // Custom styles

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const dateList = ["01/28/2025", "01/29/2025", "02/04/2025"];

const CalendarComponent = () => {
	const [date, setDate] = useState<Value>(new Date());

	const tileContent = ({ date }) => {
		if (isDateInList(date, dateList)) {
			return (
				<div>
					<p className="text-xs text-gray-500">{date.getDate()}</p>
					<p className="text-xs text-gray-500">Occupied</p>
				</div>
			);
		}
		return (
			<div>
				<p className="text-xs text-gray-500">{date.getDate()}</p>
				<p className="text-xs text-gray-500">Libre</p>
			</div>
		);
	};

	const classContent = ({ date }) => {
		if (isDateInList(date, dateList)) {
			return "!bg-white !border-[#D7D7D7] border-[1px] border-solid";
		}
		return "!border-[#F2542D] !bg-[#FFF4F1] border-[1px] border-solid";
	}
	return (
		<div className="w-full">
			<h2 className="text-2xl font-bold text-center mb-4">
				{date.toLocaleString("default", { month: "long", year: "numeric" })}
			</h2>
			<div className="custom-calendar">
				<Calendar
					view="month"
					onChange={setDate}
					value={date}
					tileContent={tileContent}
					tileClassName={classContent}
				/>
			</div>
		</div>
	);
};

export default CalendarComponent;
