"use client";
import { Data } from "@/adaptors/dashboard/Data";
import { API_ROUTE } from "@/constant/routes";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetAmmonia() {
  const { data, isLoading } = useQuery({
    queryKey: ["nh3"],
    queryFn: async () => {
      const fetchData = await fetch([API_ROUTE.data, "type=NH3"].join("?"));
      return await fetchData.json();
    },
    refetchIntervalInBackground: false,
    retry: false,
  });
  const transformedData = plainToInstance(Data, { data: data });

  return {
    data: transformedData,
    isLoading,
  };
}
