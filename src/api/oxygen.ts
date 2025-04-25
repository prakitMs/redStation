"use client";
import { useQuery } from "@tanstack/react-query";
import { Data } from "@/adaptors/dashboard/Data";
import { plainToInstance } from "class-transformer";

export function useGetOxygen() {
  const { data, isLoading } = useQuery({
    queryKey: ["O2"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=O2");
      return await fetchData.json();
    },
    retry: false,
    refetchInterval: 120000,
    refetchIntervalInBackground: false,
  });
  const transformedData = plainToInstance(Data, { data: data });
  return {
    data: transformedData,
    isLoading,
  };
}
