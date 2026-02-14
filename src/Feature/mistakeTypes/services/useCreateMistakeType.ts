import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import api from "@/api/axios";

export const useCreateMistakeType = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: { name: string; penaltyPerMistake: number }) => {
      return await api.post("/mistake-types", data);
    },
    onSuccess: () => {
      toast.success("تم إضافة نوع الخطأ بنجاح");
      navigate("/dashboard/mistake-types");
    },
    onError: (error: AxiosError<{ errors: Record<string, string[]> }>) => {
      toast.error(JSON.stringify(error.response?.data.errors, null, 2));
    },
  });
};
