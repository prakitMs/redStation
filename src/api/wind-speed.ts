import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetWindSpeed() {
  const { data, isLoading } = useQuery({
    queryKey: ["speed"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=SPEED");
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
