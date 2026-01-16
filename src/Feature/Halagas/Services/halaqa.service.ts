import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../api/axios";

import {
  BASE_URL,
  HALAQAS,
  USERS,
  MEMORIZATION_PATHS,
  MANHAJS,
} from "@/Constant/route";
import type {
  HalaqaListItem,
  HalaqaDetails,
  HalaqaFormData,
  HalaqaReviewParams,
} from "../Types/halaqa.types";
import type {
  MemorizationPath,
  Teacher,
  Manhaj,
} from "../Types/shared-dropdowns.types";

// API Functions
const getHalaqas = async (params: HalaqaReviewParams) => {
  const queryParams = new URLSearchParams();
  if (params.name) queryParams.append("name", params.name);
  if (params.academicYearId)
    queryParams.append("academicYearId", params.academicYearId.toString());
  if (params.teacherId)
    queryParams.append("teacherId", params.teacherId.toString());
  if (params.page) queryParams.append("page", params.page.toString());
  if (params.pageSize)
    queryParams.append("pageSize", params.pageSize.toString());

  const response = await api.get(`/halaqas`, { params: queryParams });
  return response.data.data;
};

const getHalaqaDetails = async (id: number): Promise<HalaqaDetails> => {
  const response = await api.get(`/${HALAQAS}/details/${id}`);
  return response.data;
};

const addHalaqa = async (data: HalaqaFormData) => {
  const response = await api.post(`/${HALAQAS}`, {
    dto: data,
  });
  return response.data;
};

// const updateHalaqa = async ({
//   id,
//   data,
// }: {
//   id: number;
//   data: HalaqaFormData;
// }) => {
//   const response = await api.put(`/${HALAQAS}/${id}`, data);
//   return response.data;
// };
const updateHalaqa = async ({
  id,
  data,
}: {
  id: number;
  data: HalaqaFormData;
}) => {
  const response = await api.put(`/${HALAQAS}/${id}`, {
    dto: data, // <-- نفس شكل الإضافة
  });
  return response.data;
};

const deleteHalaqa = async (id: number) => {
  const response = await api.delete(`/${HALAQAS}/${id}`);
  return response.data;
};

// Dropdown Data APIs
const getTeachers = async (): Promise<Teacher[]> => {
  const response = await api.get(`/${USERS}?page=1&pageSize=1000`);
  const users = response.data?.data?.data || [];
  return users.filter((u: Teacher) => u.roles.includes("معلم"));
};

const getMemorizationPaths = async (): Promise<MemorizationPath[]> => {
  const response = await api.get(`/${MEMORIZATION_PATHS}`);
  return response.data?.data?.data || [];
};

const getManhajs = async (): Promise<Manhaj[]> => {
  const response = await api.get(`/${MANHAJS}`);
  return response.data?.data?.data || [];
};

// Hooks
export const useHalaqas = (params: HalaqaReviewParams) => {
  return useQuery({
    queryKey: ["halaqas", params],
    queryFn: () => getHalaqas(params),
  });
};

export const useHalaqaDetails = (id: number) => {
  return useQuery({
    queryKey: ["halaqa", id],
    queryFn: () => getHalaqaDetails(id),
    enabled: !!id,
  });
};

export const useTeachers = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });
};

export const useMemorizationPaths = () => {
  return useQuery({
    queryKey: ["memorizationPaths"],
    queryFn: getMemorizationPaths,
  });
};

export const useManhajs = () => {
  return useQuery({
    queryKey: ["manhajs"],
    queryFn: getManhajs,
  });
};

export const useAddHalaqa = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await api.post("/halaqas", data, {
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    },
  });
};

export const useUpdateHalaqa = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateHalaqa,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["halaqas"] });
      queryClient.invalidateQueries({ queryKey: ["halaqa", variables.id] });
    },
  });
};

export const useDeleteHalaqa = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteHalaqa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["halaqas"] });
    },
  });
};
