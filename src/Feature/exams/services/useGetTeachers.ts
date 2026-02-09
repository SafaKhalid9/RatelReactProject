// import { useQuery } from "@tanstack/react-query";
// import api from "@/api/axios";
// import { USERS } from "@/Constant/route";

// export const useGetTeachers = () => {
//   return useQuery({
//     queryKey: ["teachers-list"],
//     queryFn: async () => {
//       const response = await api.get(`/${USERS}?page=1&pageSize=1000`);
//       const users = response.data?.data?.data || [];
//       return users;
//     },
//   });
// };
