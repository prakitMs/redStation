"use client";

import { Data } from "@/adaptors/dashboard/Data";
import { API_ROUTE } from "@/constant/routes";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

interface Props {
  date?: string | Date;
  type?: string;
  timeSelect?: string;
}

function generateApiPath({ date, type, timeSelect }: Props) {
  const params = new URLSearchParams();

  if (type) params.append("type", type);
  if (date) params.append("date", date.toString());
  if (timeSelect) params.append("timeSelect", timeSelect);

  return `${API_ROUTE.data}?${params.toString()}`;
}

export function useGetDefaultData({ date, type, timeSelect }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["get-data", type, date, timeSelect],
    queryFn: async () => {
      const path = generateApiPath({
        date,
        type,
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

  const transformedData = plainToInstance(Data, { data: data });

  return {
    data: transformedData,
    isLoading,
  };
}
