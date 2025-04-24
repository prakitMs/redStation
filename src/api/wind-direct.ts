import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetWindDirect() {
  const { data, isLoading } = useQuery({
    queryKey: ["direct"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=DIRECT");
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
