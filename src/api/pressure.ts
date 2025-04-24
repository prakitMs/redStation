"use client";
import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetPressure() {
  const { data } = useQuery({
    queryKey: ["preseure"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=Pressure");
      return await fetchData.json();
    },
    retry: false,
  });
  return plainToInstance(Data, { data: data });
}
