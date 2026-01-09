import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL, MEMORIZATION_PATHS } from '@/Constant/route';
import { 
  MemorizationPath, 
  MemorizationPathDetails, 
  MemorizationPathFormData, 
  MemorizationPathQueryParams 
} from '../Types/memorizationPath.types';

// API Functions
const getMemorizationPaths = async (params: MemorizationPathQueryParams) => {
  const queryParams = new URLSearchParams();
  if (params.page) queryParams.append('page', params.page.toString());
  if (params.pageSize) queryParams.append('pageSize', params.pageSize.toString());

  const response = await axios.get(`${BASE_URL}/${MEMORIZATION_PATHS}`, { params: queryParams });
  return response.data;
};

const getMemorizationPathDetails = async (id: number): Promise<MemorizationPathDetails> => {
  const response = await axios.get(`${BASE_URL}/${MEMORIZATION_PATHS}/details/${id}`);
  return response.data;
};

const addMemorizationPath = async (data: MemorizationPathFormData) => {
  const response = await axios.post(`${BASE_URL}/${MEMORIZATION_PATHS}`, data);
  return response.data;
};

const updateMemorizationPath = async ({ id, data }: { id: number; data: MemorizationPathFormData }) => {
  const response = await axios.put(`${BASE_URL}/${MEMORIZATION_PATHS}/${id}`, data);
  return response.data;
};

const deleteMemorizationPath = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${MEMORIZATION_PATHS}/${id}`);
  return response.data;
};

// Hooks
export const useMemorizationPaths = (params: MemorizationPathQueryParams) => {
  return useQuery({
    queryKey: ['memorizationPaths', params],
    queryFn: () => getMemorizationPaths(params),
  });
};

export const useMemorizationPathDetails = (id: number) => {
  return useQuery({
    queryKey: ['memorizationPath', id],
    queryFn: () => getMemorizationPathDetails(id),
    enabled: !!id,
  });
};

export const useAddMemorizationPath = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addMemorizationPath,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['memorizationPaths'] });
    },
  });
};

export const useUpdateMemorizationPath = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateMemorizationPath,
    onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ['memorizationPaths'] });
        queryClient.invalidateQueries({ queryKey: ['memorizationPath', variables.id] });
    },
  });
};

export const useDeleteMemorizationPath = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMemorizationPath,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['memorizationPaths'] });
    },
  });
};
