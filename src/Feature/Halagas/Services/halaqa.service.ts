import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  BASE_URL,
  HALAQAS,
  USERS,
  MEMORIZATION_PATHS,
  MANHAJS,
} from "@/Constant/route";
import {
  HalaqaListItem,
  HalaqaDetails,
  HalaqaFormData,
  HalaqaReviewParams,
} from "../Types/halaqa.types";
import {
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

  const response = await axios.get(`${BASE_URL}/${HALAQAS}`, {
    params: queryParams,
  });
  return response.data; // Assuming server returns { data: [...], total: ... } or similar for pagination
};

const getHalaqaDetails = async (id: number): Promise<HalaqaDetails> => {
  const response = await axios.get(`${BASE_URL}/${HALAQAS}/details/${id}`);
  return response.data;
};

const addHalaqa = async (data: HalaqaFormData) => {
  const response = await axios.post(`${BASE_URL}/${HALAQAS}`, data);
  return response.data;
};

const updateHalaqa = async ({
  id,
  data,
}: {
  id: number;
  data: HalaqaFormData;
}) => {
  const response = await axios.put(`${BASE_URL}/${HALAQAS}/${id}`, data);
  return response.data;
};

const deleteHalaqa = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${HALAQAS}/${id}`);
  return response.data;
};

// Dropdown Data APIs
const getTeachers = async (): Promise<Teacher[]> => {
  const response = await axios.get(`${BASE_URL}/${USERS}?page=1&pageSize=1000`); // Fetch all potentially
  const users = response.data?.data?.data || [];
  // Filter for teachers on client side as per requirement
  return users.filter((u: Teacher) => u.roles.includes("معلم"));
};

const getMemorizationPaths = async (): Promise<MemorizationPath[]> => {
  const response = await axios.get(`${BASE_URL}/${MEMORIZATION_PATHS}`);
  return response.data?.data || response.data; // Accommodate different potential wrapper structures
};

const getManhajs = async (): Promise<Manhaj[]> => {
  const response = await axios.get(`${BASE_URL}/${MANHAJS}`);
  return response.data?.data || response.data;
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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addHalaqa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["halaqas"] });
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
