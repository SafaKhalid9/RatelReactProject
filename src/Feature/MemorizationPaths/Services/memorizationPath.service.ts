import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios";
import { MEMORIZATION_PATHS } from "@/Constant/route";
import type {
  MemorizationPathFormData,
  MemorizationPathQueryParams,
} from "../Types/memorizationPath.types";

const getMemorizationPaths = async (params: MemorizationPathQueryParams) => {
  const res = await api.get(`/${MEMORIZATION_PATHS}`, { params });
  return res.data.data;
};

const getMemorizationPathDetails = async (id: number) => {
  const res = await api.get(`/${MEMORIZATION_PATHS}/${id}`);
  return res.data.data;
};

const addMemorizationPath = async (data: MemorizationPathFormData) => {
  const res = await api.post(`/${MEMORIZATION_PATHS}`, { dto: data });
  return res.data;
};

const updateMemorizationPath = async ({
  id,
  data,
}: {
  id: number;
  data: MemorizationPathFormData;
}) => {
  const res = await api.put(`/${MEMORIZATION_PATHS}/${id}`, data);
  return res.data;
};

const deleteMemorizationPath = async (id: number) => {
  const res = await api.delete(`/${MEMORIZATION_PATHS}/${id}`);
  return res.data;
};

export const useMemorizationPaths = (params: MemorizationPathQueryParams) =>
  useQuery({
    queryKey: ["memorizationPaths", params],
    queryFn: () => getMemorizationPaths(params),
  });

export const useMemorizationPathDetails = (id: number) =>
  useQuery({
    queryKey: ["memorizationPath", id],
    queryFn: () => getMemorizationPathDetails(id),
    enabled: !!id,
  });

export const useAddMemorizationPath = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: addMemorizationPath,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["memorizationPaths"] });
    },
  });
};

export const useUpdateMemorizationPath = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: updateMemorizationPath,
    onSuccess: (_, v) => {
      qc.invalidateQueries({ queryKey: ["memorizationPaths"] });
      qc.invalidateQueries({ queryKey: ["memorizationPath", v.id] });
    },
  });
};
export const useDeleteMemorizationPath = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMemorizationPath,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memorizationPaths"] });
      queryClient.invalidateQueries({ queryKey: ["memorizationPaths"] });
    },
  });
};
