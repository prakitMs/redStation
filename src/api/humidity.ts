"use client";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import { Data } from "@/adaptors/dashboard/Data";

export default function useGetHumidity() {
  const { data } = useQuery({
    queryKey: ["humidity"],
    queryFn: async () => {
      const fetchData = await fetch("/api/find-data?type=Humidity");
      return await fetchData.json();
    },
    retry: false,
  });
  return plainToInstance(Data, { data: data });
}
