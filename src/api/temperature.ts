import { Data } from "@/adaptors/dashboard/Data";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export default function useGetTemperature() {
  const { data } = useQuery({
    queryKey: ["temperature"],
    queryFn: async () => {
      const fetchData = await fetch("/api/find-data?type=Temperature");
      return await fetchData.json();
    },
    retry: false,
  });
  return plainToInstance(Data, { data: data });
}
