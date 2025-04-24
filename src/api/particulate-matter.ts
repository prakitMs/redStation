import { PM } from "@/adaptors/dashboard/PM";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetPM() {
  const { data, isLoading } = useQuery({
    queryKey: ["no2"],
    queryFn: async () => {
      const fetchData = await fetch("/api/find-pm");
      return await fetchData.json();
    },
    refetchInterval: 120000,
    refetchIntervalInBackground: false,
    retry: false,
  });

  const transformedData = plainToInstance(PM, { data: data });

  return {
    data: transformedData,
    isLoading,
  };
}
