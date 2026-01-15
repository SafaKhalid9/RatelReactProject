// src/Feature/Exams/Services/exam.service.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL, EXAMS } from "@/Constant/route";
import {
  ExamDetails,
  ExamFormData,
  ExamQueryParams,
} from "../Types/exam.types";

// API Functions
const getExams = async (params: ExamQueryParams) => {
  const queryParams = new URLSearchParams();
  if (params.page) queryParams.append("page", params.page.toString());
  if (params.pageSize)
    queryParams.append("pageSize", params.pageSize.toString());

  const response = await axios.get(`${BASE_URL}/${EXAMS}`, {
    params: queryParams,
  });
  return response.data;
};

const getExamDetails = async (id: number): Promise<ExamDetails> => {
  const response = await axios.get(`${BASE_URL}/${EXAMS}/${id}`);
  return response.data;
};

const addExam = async (data: ExamFormData) => {
  const response = await axios.post(`${BASE_URL}/${EXAMS}`, data);
  return response.data;
};

const updateExam = async ({ id, data }: { id: number; data: ExamFormData }) => {
  const response = await axios.put(`${BASE_URL}/${EXAMS}/${id}`, data);
  return response.data;
};

const deleteExam = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${EXAMS}/${id}`);
  return response.data;
};

// Hooks
export const useExams = (params: ExamQueryParams) => {
  return useQuery({
    queryKey: ["exams", params],
    queryFn: () => getExams(params),
  });
};

export const useExamDetails = (id: number) => {
  return useQuery({
    queryKey: ["exam", id],
    queryFn: () => getExamDetails(id),
    enabled: !!id,
  });
};

export const useAddExam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addExam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exams"] });
    },
  });
};

export const useUpdateExam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateExam,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["exams"] });
      queryClient.invalidateQueries({ queryKey: ["exam", variables.id] });
    },
  });
};

export const useDeleteExam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteExam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exams"] });
    },
  });
};
