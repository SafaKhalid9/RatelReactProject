// import apiClient from "@/lib/axios";
// import { useQuery } from "@tanstack/react-query";
// import { type ExamDetailsResponse } from "../types/examsType";

// export const useGetExamDetails = (id: string) => {
//   return useQuery<ExamDetailsResponse>({
//     queryKey: ["exam", id],
//     queryFn: async () => {
//       const response = await apiClient.get(`/exams/${id}`);
//       return response.data;
//     },
//     enabled: !!id,
//   });
// };
