import { useQuery } from "@tanstack/react-query";
import { type ExamDetailsResponse } from "../types/examsType";
import api from "@/api/axios";

export const useGetExamDetails = (id: string) => {
  return useQuery<ExamDetailsResponse>({
    queryKey: ["exam", id],
    queryFn: async () => {
      const response = await api.get(`/exams/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};
