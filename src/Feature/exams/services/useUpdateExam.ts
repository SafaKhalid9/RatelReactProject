import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios";
import { toast } from "sonner";

export type UpdateExamDto = {
  id: number;
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

export const useUpdateExam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Omit<UpdateExamDto, "id">;
    }) => {
      const response = await api.put(`/exams/${id}`, data);
      return response.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["exams"] });
      queryClient.invalidateQueries({
        queryKey: ["exam", variables.id.toString()],
      });
      toast.success("تم تحديث الاختبار بنجاح");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "حدث خطأ أثناء تحديث الاختبار",
      );
    },
  });
};
