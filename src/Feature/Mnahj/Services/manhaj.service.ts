// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';
// import { BASE_URL } from '@/Constant/route';
// import { Manhaj, ManhajFormData } from '../Types/manhaj.types';

// const MANHAJ_ENDPOINT = `${BASE_URL}/manhajs`; // Adjust endpoint if needed

// const getManhajs = async (): Promise<Manhaj[]> => {
//     const response = await axios.get(MANHAJ_ENDPOINT);
//     return response.data;
// };

// const getManhaj = async (id: string): Promise<Manhaj> => {
//     const response = await axios.get(`${MANHAJ_ENDPOINT}/${id}`);
//     return response.data;
// };

// const addManhaj = async (data: ManhajFormData): Promise<Manhaj> => {
//     const formData = new FormData();
//     formData.append('name', data.name);
//     formData.append('authorName', data.authorName);
//     formData.append('targetAudience', data.targetAudience);
//     formData.append('numberOfLessons', data.numberOfLessons.toString());
//     formData.append('goals', data.goals);
//     if (data.imageFile) formData.append('image', data.imageFile);
//     if (data.pdfFile) formData.append('pdf', data.pdfFile);

//     const response = await axios.post(MANHAJ_ENDPOINT, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//     return response.data;
// };

// const updateManhaj = async ({ id, data }: { id: string; data: ManhajFormData }): Promise<Manhaj> => {
//     const formData = new FormData();
//     formData.append('name', data.name);
//     formData.append('authorName', data.authorName);
//     formData.append('targetAudience', data.targetAudience);
//     formData.append('numberOfLessons', data.numberOfLessons.toString());
//     formData.append('goals', data.goals);
//     if (data.imageFile) formData.append('image', data.imageFile);
//     if (data.pdfFile) formData.append('pdf', data.pdfFile);
    
//     // Using PUT or PATCH depending on backend, traditionally used for full update, Patch for partial. 
//     // Multipart usually works with PUT/POST.
//     const response = await axios.put(`${MANHAJ_ENDPOINT}/${id}`, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//     return response.data;
// };

// const deleteManhaj = async (id: string): Promise<void> => {
//     await axios.delete(`${MANHAJ_ENDPOINT}/${id}`);
// };

// export const useManhajs = () => {
//     return useQuery({
//         queryKey: ['manhajs'],
//         queryFn: getManhajs,
//     });
// };

// export const useManhaj = (id: string) => {
//     return useQuery({
//         queryKey: ['manhaj', id],
//         queryFn: () => getManhaj(id),
//         enabled: !!id,
//     });
// };

// export const useAddManhaj = () => {
//     const queryClient = useQueryClient();
//     return useMutation({
//         mutationFn: addManhaj,
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['manhajs'] });
//         },
//     });
// };

// export const useUpdateManhaj = () => {
//     const queryClient = useQueryClient();
//     return useMutation({
//         mutationFn: updateManhaj,
//         onSuccess: (data) => {
//             queryClient.invalidateQueries({ queryKey: ['manhajs'] });
//             queryClient.invalidateQueries({ queryKey: ['manhaj', data.id] });
//         },
//     });
// };

// export const useDeleteManhaj = () => {
//     const queryClient = useQueryClient();
//     return useMutation({
//         mutationFn: deleteManhaj,
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['manhajs'] });
//         },
//     });
// };
