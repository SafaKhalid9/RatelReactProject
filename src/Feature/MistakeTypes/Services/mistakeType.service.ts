import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from '@/Constant/route';
import { MistakeType, MistakeTypeFormData } from '../Types/mistakeType.types';

const MISTAKE_TYPES_URL = 'mistake-types';

// API Functions
const getMistakeTypes = async (page: number = 1, pageSize: number = 10) => {
    const response = await axios.get(`${BASE_URL}/${MISTAKE_TYPES_URL}`, {
        params: { pageNumber: page, pageSize }
    });
    return response.data;
};

const getMistakeTypeById = async (id: number): Promise<MistakeType> => {
    const response = await axios.get(`${BASE_URL}/${MISTAKE_TYPES_URL}/${id}`);
    return response.data;
};

const addMistakeType = async (data: MistakeTypeFormData) => {
    const response = await axios.post(`${BASE_URL}/${MISTAKE_TYPES_URL}`, data);
    return response.data;
};

const updateMistakeType = async ({ id, data }: { id: number; data: MistakeTypeFormData }) => {
    const response = await axios.put(`${BASE_URL}/${MISTAKE_TYPES_URL}/${id}`, data);
    return response.data;
};

const deleteMistakeType = async (id: number) => {
    const response = await axios.delete(`${BASE_URL}/${MISTAKE_TYPES_URL}/${id}`);
    return response.data;
};

// Hooks
export const useMistakeTypes = (page: number = 1, pageSize: number = 10) => {
    return useQuery({
        queryKey: ['mistakeTypes', page, pageSize],
        queryFn: () => getMistakeTypes(page, pageSize),
    });
};

export const useMistakeTypeDetails = (id: number) => {
    return useQuery({
        queryKey: ['mistakeType', id],
        queryFn: () => getMistakeTypeById(id),
        enabled: !!id,
    });
};

export const useAddMistakeType = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addMistakeType,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['mistakeTypes'] });
        },
    });
};

export const useUpdateMistakeType = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateMistakeType,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['mistakeTypes'] });
            queryClient.invalidateQueries({ queryKey: ['mistakeType'] });
        },
    });
};

export const useDeleteMistakeType = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteMistakeType,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['mistakeTypes'] });
        },
    });
};
