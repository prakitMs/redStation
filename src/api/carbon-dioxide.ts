"use client";

import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export function useGetCarbonDioxide() {
  const { data, isLoading } = useQuery({
    queryKey: ["co2"],
    queryFn: async () => {
      const fetchData = await fetch("/api/find-data?type=CO2");
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
