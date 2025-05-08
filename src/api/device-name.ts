"use client";

import { DeviceName } from "@/adaptors/dashboard/DeviceName";
import { API_ROUTE } from "@/constant/routes";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export function useGetDeviceName() {
  const { data, isLoading } = useQuery({
    queryKey: ["device-name"],
    queryFn: async () => {
      const fetchData = await fetch(API_ROUTE.device);
      return await fetchData.json();
    },
    retry: false,
  });

  const transformedData = plainToInstance(DeviceName, {
    data: data,
  });
  return { data: transformedData, isLoading };
}
