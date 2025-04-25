"use client";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import { Data } from "@/adaptors/dashboard/Data";

export default function useGetUV() {
  const { data, isLoading } = useQuery({
    queryKey: ["uv"],
    queryFn: async () => {
      const fetchData = await fetch("/api/find-data?type=UV");
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
