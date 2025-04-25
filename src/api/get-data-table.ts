"use client";

import { Table } from "@/adaptors/dashboard/Table";
import { API_ROUTE } from "@/constant/routes";
import { useQuery } from "@tanstack/react-query";
import { plainToInstance } from "class-transformer";

export function useGetDataTable(type: string, date: string | Date | undefined) {
  const { data } = useQuery({
    queryKey: ["table", type, date],
    queryFn: async () => {
      const path = `${API_ROUTE.table}?type=${type}&date=${date}`;
      const fetchData = await fetch(path);
      return await fetchData.json();
    },
    retry: false,
    enabled: !!date,
  });

  const transformedData = plainToInstance(Table, { data: data });
  return { dataTable: transformedData };
}
