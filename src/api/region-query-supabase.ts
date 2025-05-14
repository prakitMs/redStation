import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import { API_ROUTE } from "@/constant/routes";
import camelcaseKeys from "camelcase-keys";
import { RegionName } from "@/adaptors/dashboard/Region";

export function useGetRegions() {
  const { data, ...props } = useQuery({
    queryKey: ["region"],
    queryFn: async () => {
      const fetchData = await fetch(API_ROUTE.regions);
      return await fetchData.json();
    },
  });

  const transformedData = plainToInstance(RegionName, {
    data: camelcaseKeys(data, { deep: true }),
  });
  return { ...props, data: transformedData };
}
