import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function formatDate(date: string | Date | undefined) {
  if (!date) return new Date();
  return dayjs(date).tz("UTC").toISOString();
}

export function filterDate(date: string | Date) {
  const startDate = dayjs(date).format("YYYY-MM-DDT00:00:00Z");
  return {
    startDate: formatDate(startDate),
    endDate: formatDate(date),
  };
}

export function formatDateToThai(date: string | Date | undefined) {
  if (!date) return "-";
  return dayjs(date).tz("Asia/Bangkok").format("D MMMM YYYY HH:mm");
}

export function formatDateToThaiHour(date: string | Date | undefined) {
  if (!date) return "-";
  return dayjs(date).tz("Asia/Bangkok").format("HH:mm");
}
