import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetNitrogenDioxide() {
  const { data, isLoading } = useQuery({
    queryKey: ["no2"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=NO2");
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
