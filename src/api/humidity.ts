"use client";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import { Data } from "@/adaptors/dashboard/Data";

export default function useGetHumidity() {
  const { data, isLoading } = useQuery({
    queryKey: ["humidity"],
    queryFn: async () => {
      const fetchData = await fetch("/api/find-data?type=Humidity");
      return await fetchData.json();
    },
    refetchInterval: 120000,
    refetchIntervalInBackground: false,
    retry: false,
  });
  const transformedData = plainToInstance(Data, { data: data });
  return {
    isLoading,
    data: transformedData,
  };
}
