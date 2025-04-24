"use client";
import { useQuery } from "@tanstack/react-query";
import { Data } from "@/adaptors/dashboard/Data";
import { plainToInstance } from "class-transformer";

export function useGetOxygen() {
  const { data } = useQuery({
    queryKey: ["O2"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=O2");
      return await fetchData.json();
    },
    retry: false,
  });
  return plainToInstance(Data, { data: data });
}
