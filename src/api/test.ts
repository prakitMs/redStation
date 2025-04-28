"use client";
import { useQuery } from "@tanstack/react-query";

export default function useGetTest() {
  const { data, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const fetchData = await fetch("/api/test");
      return await fetchData.json();
    },
    refetchIntervalInBackground: false,
    retry: false,
  });

  return {
    data,
    isLoading,
  };
}
