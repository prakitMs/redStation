import { API_ROUTE } from "@/constant/routes";
import { api } from "../components/utils/api";
import camelcaseKeys from "camelcase-keys";
import { plainToInstance } from "class-transformer";

export const useGetDashboard = async () => {
  const resp: Record<string, any> = await api.get(API_ROUTE.dashboard);
  const formatResp = camelcaseKeys(resp.data, { deep: true });

  return formatResp;
};
