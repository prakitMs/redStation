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
  return dayjs(date).tz("Asia/Bangkok").format("D MMMM YYYY HH:mm:ss");
}

export function plus24Hours(date: string | Date | undefined) {
  if (!date) return {};
  const dateSelect = dayjs(date).tz("UTC");
  const startDate = dayjs(dateSelect)
    .subtract(24, "hour")
    .format("YYYY-MM-DDT17:00:00Z");
  const stopDate = dayjs(dateSelect).format("YYYY-MM-DDT17:00:00Z");
  return {
    startDate: startDate,
    endDate: stopDate,
  };
}
export function getDateOnly(date: string | Date | undefined) {
  return dayjs(date).format("D MMMM YYYY");
}
