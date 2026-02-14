import api from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import { APPRECIATION_GRADES } from "@/Constant/route";
import type { AppreciationGradeResponse } from "../types/appreciationGrades.types";

type Params = {
  page?: number;
  pageSize?: number;
};

export const useGetAppreciationGrades = (params: Params) => {
  return useQuery<AppreciationGradeResponse>({
    queryKey: ["appreciation-grades", params?.page, params?.pageSize],
    queryFn: async () => {
      const response = await api.get(`/${APPRECIATION_GRADES}`, {
        params,
      });
      return response.data;
    },
  });
};
