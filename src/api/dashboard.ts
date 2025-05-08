"use client";

import { Dashboard } from "@/adaptors/dashboard/Dashboard";
import { API_ROUTE } from "@/constant/routes";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export function useGetDashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const fetchData = await fetch(API_ROUTE.dashboard);
      return await fetchData.json();
    },
    refetchInterval: 300000,
    refetchIntervalInBackground: false,
    retry: false,
  });

  const transformedData = plainToInstance(Dashboard, {
    data: data,
  });
  return { data: transformedData, isLoading };
}
