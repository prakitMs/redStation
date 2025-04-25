"use client";
import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetPressure() {
  const { data, isLoading } = useQuery({
    queryKey: ["preseure"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=Pressure");
      return await fetchData.json();
    },
    refetchInterval: 12000,
    retry: false,
  });
  const transformedData = plainToInstance(Data, { data: data });

  return {
    data: transformedData,
    isLoading,
  };
}
