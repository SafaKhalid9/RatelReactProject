import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import api from "@/api/axios";

export const useUpdateMistakeType = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (payload: {
      id: string | number;
      data: { name: string; penaltyPerMistake: number };
    }) => {
      const { id, data } = payload;
      return await api.put(`/mistake-types/${id}`, data);
    },
    onSuccess: () => {
      toast.success("تم تعديل نوع الخطأ بنجاح");
      navigate("/dashboard/mistake-types");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message || "حدث خطأ ما");
    },
  });
};
