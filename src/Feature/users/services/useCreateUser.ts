// import apiClient from "@/lib/axios";
// import { useMutation } from "@tanstack/react-query";
// import type { UserFormType } from "../pages/addUser";
// import { toast } from "sonner";
// import { useNavigate } from "react-router";
// import { AxiosError } from "axios";

// export const useCreateUser = () => {
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: async (data: UserFormType) => {
//       return await apiClient.post("/users", data);
//     },
//     onSuccess: () => {
//       toast.success("تم إضافة المستخدم بنجاح");
//       navigate("/dashboard/users");
//     },
//     onError: (error: AxiosError<{ errors: Record<string, string[]> }>) => {
//       toast.error(JSON.stringify(error.response?.data.errors, null, 2));
//     },
//   });
// };
