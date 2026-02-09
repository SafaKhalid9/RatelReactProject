// import apiClient from "@/lib/axios";
// import { useQuery } from "@tanstack/react-query";
// import { type UserDetailsResponse } from "../types/usersType";

// export const useGetUserDetails = (id: string | undefined) => {
//   return useQuery({
//     queryKey: ["user-details", id],
//     queryFn: async () => {
//       const response = await apiClient.get<UserDetailsResponse>(
//         `/users/details/${id}`,
//       );
//       return response.data.data;
//     },
//     enabled: !!id,
//   });
// };
