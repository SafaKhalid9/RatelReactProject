import { useQuery } from "@tanstack/react-query";
import { type UserDetailsResponse } from "../types/usersType";
import api from "@/api/axios";

export const useGetUserDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["user-details", id],
    queryFn: async () => {
      const response = await api.get<UserDetailsResponse>(
        `/users/details/${id}`,
      );
      return response.data.data;
    },
    enabled: !!id,
  });
};
