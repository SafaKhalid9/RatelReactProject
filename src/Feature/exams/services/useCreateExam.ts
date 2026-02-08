import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios";
import { toast } from "sonner";

export type CreateExamDto = {
  halaqaIds: number[];
  manhajIds: number[];
  teacherIds: number[];
  examTypeId: number;
  examCategory: string;
  examDegree: number;
  startDateTime: string;
  endDateTime: string;
  notes?: string;
};

export const useCreateExam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateExamDto) => {
      const response = await api.post("/exams", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exams"] });
      toast.success("تم إضافة الاختبار بنجاح");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "حدث خطأ أثناء إضافة الاختبار"
      );
    },
  });
};
