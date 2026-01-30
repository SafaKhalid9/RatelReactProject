import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios";
import { MANHAJS } from "@/Constant/route";
import { toast } from "sonner";

import type {
  Manhaj,
  ManhajApiItem,
  ManhajFormData,
} from "../Types/manhaj.types";

export type ManhajQueryParams = {
  page?: number;
  pageSize?: number;
  name?: string;
};
export const toFormData = (data: ManhajFormData): FormData => {
  const fd = new FormData();

  fd.append("Name", data.name);
  fd.append("AuthorName", data.authorName);
  fd.append("TargetAudionce", data.targetAudience); // API typo
  fd.append("NumberOfLessons", data.numberOfLessons.toString());
  fd.append("Goals", data.goals);

  if (data.imageFile) fd.append("ImageFile", data.imageFile);
  if (data.pdfFile) fd.append("PdfFile", data.pdfFile);

  return fd;
};
const getManhajs = async (params: ManhajQueryParams) => {
  const queryParams = new URLSearchParams();

  if (params.name) queryParams.append("name", params.name);
  if (params.page) queryParams.append("page", params.page.toString());
  if (params.pageSize)
    queryParams.append("pageSize", params.pageSize.toString());

  const response = await api.get(`/${MANHAJS}`, { params: queryParams });
  const apiData = response.data.data;

  return {
    data: (apiData.data as ManhajApiItem[]).map((m) => ({
      manhajId: m.manhajId,
      name: m.name,
      authorName: m.authorName,
      targetAudionce: m.targetAudionce ?? "",
      numberOfLessons: m.numberOfLessons ?? 0,
    })),
    pagination: apiData.pagination,
  };
};

const getManhaj = async (id: number): Promise<Manhaj> => {
  const res = await api.get(`/${MANHAJS}/${id}`);
  const m = res.data.data ?? res.data;

  return {
    manhajId: m.manhajId,
    name: m.name,
    authorName: m.authorName,
    numberOfLessons: m.numberOfLessons,
    targetAudience: m.targetAudionce,
    goals: m.goals,
    imageUrl: m.imageUrl,
    pdfFilePath: m.pdfFilePath,
  };
};

const addManhaj = async (data: ManhajFormData) =>
  api.post(`/${MANHAJS}`, toFormData(data));

const updateManhaj = async ({ id, data }: { id: number; data: FormData }) =>
  api.put(`/${MANHAJS}/${id}`, data);

const deleteManhaj = async (id: number) => api.delete(`/${MANHAJS}/${id}`);
export const useManhajs = (params: ManhajQueryParams) =>
  useQuery({
    queryKey: ["manhajs", params],
    queryFn: () => getManhajs(params),
  });

export const useManhajDetails = (id?: number) =>
  useQuery({
    queryKey: ["manhaj", id],
    queryFn: () => getManhaj(id!),
    enabled: !!id,
  });
export const useAddManhaj = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: addManhaj,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["manhajs"] });
      toast.success("تمت إضافة المنهج بنجاح");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "حدث خطأ أثناء إضافة المنهج");
    },
  });
};

export const useUpdateManhaj = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updateManhaj,
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["manhajs"] });
      qc.invalidateQueries({ queryKey: ["manhaj", vars.id] });
      toast.success("تم تحديث المنهج بنجاح");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "حدث خطأ أثناء تحديث المنهج");
    },
  });
};

export const useDeleteManhaj = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deleteManhaj,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["manhajs"] });
      toast.success("تم حذف المنهج بنجاح");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "حدث خطأ أثناء حذف المنهج");
    },
  });
};
export const downloadManhajPdf = async (id: number, name: string) => {
  const response = await api.get(`/manhajs/${id}/download`, {
    responseType: "blob",
    headers: {
      Accept: "application/pdf",
    },
  });

  const blob = new Blob([response.data], {
    type: "application/pdf",
  });

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = `${name}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();

  window.URL.revokeObjectURL(url);
};
