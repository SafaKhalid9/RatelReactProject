// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';
// import { BASE_URL, USERS } from '@/Constant/route';
// import { 
//   UserListItem, 
//   UserDetails, 
//   UserFormData, 
//   UserQueryParams 
// } from '../Types/user.types';

// // API Functions
// const getUsers = async (params: UserQueryParams) => {
//   const queryParams = new URLSearchParams();
//   if (params.page) queryParams.append('page', params.page.toString());
//   if (params.pageSize) queryParams.append('pageSize', params.pageSize.toString());
//   if (params.role) queryParams.append('role', params.role);
//   if (params.search) queryParams.append('search', params.search);

//   const response = await axios.get(`${BASE_URL}/${USERS}`, { params: queryParams });
//   return response.data;
// };

// const getUserDetails = async (id: number): Promise<UserDetails> => {
//   const response = await axios.get(`${BASE_URL}/${USERS}/${id}`);
//   return response.data;
// };

// const addUser = async (data: UserFormData) => {
//   const response = await axios.post(`${BASE_URL}/${USERS}`, data);
//   return response.data;
// };

// const updateUser = async ({ id, data }: { id: number; data: UserFormData }) => {
//   const response = await axios.put(`${BASE_URL}/${USERS}/${id}`, data);
//   return response.data;
// };

// // No Delete in Spec? Usually yes. Copilot should add it.
// const deleteUser = async (id: number) => {
//   const response = await axios.delete(`${BASE_URL}/${USERS}/${id}`);
//   return response.data;
// };

// // Hooks
// export const useUsers = (params: UserQueryParams) => {
//   return useQuery({
//     queryKey: ['users', params],
//     queryFn: () => getUsers(params),
//   });
// };

// export const useUserDetails = (id: number) => {
//   return useQuery({
//     queryKey: ['user', id],
//     queryFn: () => getUserDetails(id),
//     enabled: !!id,
//   });
// };

// export const useAddUser = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: addUser,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['users'] });
//     },
//   });
// };

// export const useUpdateUser = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: updateUser,
//     onSuccess: (_, variables) => {
//         queryClient.invalidateQueries({ queryKey: ['users'] });
//         queryClient.invalidateQueries({ queryKey: ['user', variables.id] });
//     },
//   });
// };

// export const useDeleteUser = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: deleteUser,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['users'] });
//     },
//   });
// };
