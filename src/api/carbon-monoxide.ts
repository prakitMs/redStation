import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetCarbonMonoxide() {
  const { data, isLoading } = useQuery({
    queryKey: ["CO"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=CO");
      return await fetchData.json();
    },
    retry: false,
  });
  const transformedData = plainToInstance(Data, { data: data });
  return { data: transformedData, isLoading };
}
