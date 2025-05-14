import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import { ProvinceName } from "@/adaptors/dashboard/Provinces";
import { API_ROUTE } from "@/constant/routes";
import camelcaseKeys from "camelcase-keys";

interface Province {
  region?: string;
}
export function useGetProvinces({ region }: Province) {
  const { data, ...props } = useQuery({
    queryKey: ["provices", region],
    queryFn: async () => {
      const path = `${API_ROUTE.provinces}?regionId=${region}`;
      const fetchData = await fetch(path);
      return await fetchData.json();
    },
    retry: false,
    enabled: !!region,
  });

  const transformedData = plainToInstance(ProvinceName, {
    data: camelcaseKeys(data, { deep: true }),
  });
  return { ...props, data: transformedData };
}
