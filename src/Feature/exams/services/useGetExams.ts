import { useQuery } from "@tanstack/react-query";
import { type ExamsResponse } from "../types/examsType";
import api from "@/api/axios";
type Props = {
  page?: number;
  pageSize?: number;
  name?: string;
};
export const useGetExams = (params?: Props) => {
  return useQuery<ExamsResponse>({
    queryKey: ["exams", { params }],
    queryFn: async () => {
      const response = await api.get("/exams", {
        params,
      });
      return response.data;
    },
  });
};
