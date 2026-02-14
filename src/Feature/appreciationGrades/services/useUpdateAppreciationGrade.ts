import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios";
import { toast } from "sonner";
import { APPRECIATION_GRADES } from "@/Constant/route";
type UpdateAppreciationGradeRequest = {
  appreciationId: number;
  minimumScore: number;
  maximumScore: number;
};
export const useUpdateAppreciationGrade = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateAppreciationGradeRequest) => {
      const response = await api.put(`/${APPRECIATION_GRADES}/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appreciation-grades"] });
      toast.success("تم تحديث التقدير بنجاح");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "حدث خطأ أثناء تحديث التقدير",
      );
    },
  });
};
