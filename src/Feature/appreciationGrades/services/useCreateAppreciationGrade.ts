import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { toast } from "sonner";
import { APPRECIATION_GRADES } from "@/Constant/route";
import type { AxiosError } from "axios";
type CreateAppreciationGradeRequest = {
  appreciationId: number;
  minimumScore: number;
  maximumScore: number;
};

export const useCreateAppreciationGrade = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateAppreciationGradeRequest) => {
      const response = await apiClient.post(`/${APPRECIATION_GRADES}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appreciation-grades"] });
      toast.success("تم إضافة التقدير بنجاح");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(
        error?.response?.data?.message || "حدث خطأ أثناء إضافة التقدير",
      );
    },
  });
};
