import { PM } from "@/adaptors/dashboard/PM";
import { API_ROUTE } from "@/constant/routes";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import { DateRange } from "react-day-picker";

interface Props {
  date?: string | DateRange;
  timeSelect?: string;
}
function generateApiPath({ date, timeSelect }: Props) {
  const params = new URLSearchParams();

  if (date) {
    if (typeof date === "string") {
      params.append("date", date);
    } else if (typeof date === "object" && date.from && date.to) {
      params.append("dateFrom", date.from.toISOString());
      params.append("dateTo", date.to.toISOString());
    }
  }
  if (timeSelect) params.append("timeSelect", timeSelect);

  return `${API_ROUTE.pm}?${params.toString()}`;
}

export default function useGetPM({ date, timeSelect }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["get-data-pm", date, timeSelect],
    queryFn: async () => {
      const path = generateApiPath({
        date,
        timeSelect,
      });

      console.log({ path });

      const fetchData = await fetch(path);
      return await fetchData.json();
    },
    refetchInterval: 120000, //recall 2m
    refetchIntervalInBackground: false, //dont call when out focus
    retry: false,
  });

  const transformedData = plainToInstance(PM, { data: data });

  return {
    data: transformedData,
    isLoading,
  };
}
