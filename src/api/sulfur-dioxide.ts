import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetSulfurDioxide() {
  const { data, isLoading } = useQuery({
    queryKey: ["so2"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=SO2");
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
