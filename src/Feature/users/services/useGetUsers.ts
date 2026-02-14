import { useQuery } from "@tanstack/react-query";
import { type UsersResponse } from "../types/usersType";
import api from "@/api/axios";
type Props = {
  page?: number;
  pageSize?: number;
  name?: string;
};
export const useGetUsers = (params?: Props) => {
  return useQuery<UsersResponse>({
    queryKey: ["users", { params }],
    queryFn: async () => {
      const response = await api.get("/users", {
        params,
      });
      return response.data;
    },
  });
};
