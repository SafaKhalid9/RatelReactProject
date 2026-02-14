import { useQuery } from "@tanstack/react-query";
import { type MistakeTypeResponse } from "../types/mistakeTypes.types";
import api from "@/api/axios";

type Props = {
  page?: number;
  pageSize?: number;
  name?: string;
};

export const useGetMistakeTypes = (params?: Props) => {
  return useQuery<MistakeTypeResponse>({
    queryKey: ["mistake-types", { params }],
    queryFn: async () => {
      const response = await api.get("/mistake-types", {
        params,
      });
      return response.data;
    },
  });
};
