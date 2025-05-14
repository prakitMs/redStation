import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import { API_ROUTE } from "@/constant/routes";
import camelcaseKeys from "camelcase-keys";
import { DistrictsName } from "@/adaptors/dashboard/Districts";

interface DitrictProps {
  provinces?: string;
}

export function useGetDistricts({ provinces }: DitrictProps) {
  const { data, ...props } = useQuery({
    queryKey: ["districts", provinces],
    queryFn: async () => {
      const path = `${API_ROUTE.districts}?provincesId=${provinces}`;
      const fetchData = await fetch(path);
      return await fetchData.json();
    },
    retry: false,
    enabled: !!provinces,
  });

  const transformedData = plainToInstance(DistrictsName, {
    data: camelcaseKeys(data, { deep: true }),
  });
  return { ...props, data: transformedData };
}
