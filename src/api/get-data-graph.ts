"use client";

import { Data } from "@/adaptors/dashboard/Data";
import { API_ROUTE } from "@/constant/routes";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import { DateRange } from "react-day-picker";

interface Props {
  date?: string | DateRange;
  type?: string;
  timeSelect?: string;
  device?: string;
}

function generateApiPath({ device, date, type, timeSelect }: Props) {
  const params = new URLSearchParams();

  if (type) params.append("type", type);
  if (device) params.append("device", device);
  if (date) {
    if (typeof date === "string") {
      params.append("date", date);
    } else if (typeof date === "object" && date.from && date.to) {
      params.append("dateFrom", date.from.toISOString());
      params.append("dateTo", date.to.toISOString());
    }
  }
  if (timeSelect) params.append("timeSelect", timeSelect);

  return `${API_ROUTE.data}?${params.toString()}`;
}

export function useGetDefaultData({ device, date, type, timeSelect }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["get-data", device, type, date, timeSelect],
    queryFn: async () => {
      const path = generateApiPath({
        date,
        type,
        timeSelect,
        device,
      });

      console.log({ path });

      const fetchData = await fetch(path);
      return await fetchData.json();
    },
    refetchInterval: 120000,
    refetchIntervalInBackground: false,
    retry: false,
  });

  const transformedData = plainToInstance(Data, { data: data });

  return {
    data: transformedData,
    isLoading,
  };
}
