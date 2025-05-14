import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";
import { API_ROUTE } from "@/constant/routes";
import camelcaseKeys from "camelcase-keys";
import { SubDistrictsName } from "@/adaptors/dashboard/Sub-Districts";

interface SubDistrictProps {
  district?: string;
}

export function useGetSubDistricts({ district }: SubDistrictProps) {
  const { data, ...props } = useQuery({
    queryKey: ["sub-districts", district],
    queryFn: async () => {
      const path = `${API_ROUTE.subDistricts}?districtId=${district}`;
      const fetchData = await fetch(path);
      return await fetchData.json();
    },
    retry: false,
    enabled: !!district,
  });

  const transformedData = plainToInstance(SubDistrictsName, {
    data: camelcaseKeys(data, { deep: true }),
  });
  return { ...props, data: transformedData };
}
