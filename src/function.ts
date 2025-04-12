import dayjs from "dayjs";

export function isDateInList(date: Date, dateList: string[]): boolean {
	return dateList.some((dateString) =>
		dayjs(date).isSame(dayjs(dateString), "day"),
	);
}
