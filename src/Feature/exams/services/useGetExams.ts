import apiClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { type ExamsResponse } from "../types/examsType";
type Props = {
  page?: number;
  pageSize?: number;
  name?: string;
};
export const useGetExams = (params?: Props) => {
  return useQuery<ExamsResponse>({
    queryKey: ["exams", { params }],
    queryFn: async () => {
      const response = await apiClient.get("/exams", {
        params,
      });
      return response.data;
    },
  });
};
