import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetSound() {
  const { data, isLoading } = useQuery({
    queryKey: ["sound"],
    queryFn: async () => {
      const fetchData = await fetch("api/find-data?type=SOUND");
      return await fetchData.json();
    },
    retry: false,
  });
  const transformedData = plainToInstance(Data, { data: data });
  return {
    data: transformedData,
    isLoading,
  };
}
