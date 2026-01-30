import apiClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { type UsersResponse } from "../types/usersType";
type Props = {
  page?: number;
  pageSize?: number;
  name?: string;
};
export const useGetUsers = (params?: Props) => {
  return useQuery<UsersResponse>({
    queryKey: ["users", { params }],
    queryFn: async () => {
      const response = await apiClient.get("/users", {
        params,
      });
      return response.data;
    },
  });
};
