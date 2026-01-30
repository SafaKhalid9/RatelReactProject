import apiClient from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import type { UserFormType } from "../pages/addUser";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

export const useUpdateUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (payload: {
      id: string;
      data: Partial<UserFormType>;
    }) => {
      const { id, data } = payload;
      return await apiClient.put(`/users/${id}`, data);
    },
    onSuccess: () => {
      toast.success("تم تعديل المستخدم بنجاح");
      navigate("/dashboard/users");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message);
    },
  });
};
