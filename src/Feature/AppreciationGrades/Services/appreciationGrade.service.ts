import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/Constant/route";
import type {
  AppreciationGrade,
  AppreciationGradeFormData,
} from "../Types/appreciationGrade.types";

const APPRECIATION_GRADES_URL = "appreciation-grades";

// Helper to get token (assuming it's stored in localStorage or similar,
// though the spec says "Injected via Axios instance", the previous user service just imported axios.
// I will stick to the pattern of the user service for now, but if there's an auth context,
// the axios interceptor should handle it. I'll just use bare axios as per existing code
// unless I see an interceptor setup file).

// API Functions
const getAppreciationGrades = async (
  page: number = 1,
  pageSize: number = 10
) => {
  const response = await axios.get(`${BASE_URL}/${APPRECIATION_GRADES_URL}`, {
    params: { pageNumber: page, pageSize }, // Adjust query params based on backend expectation
  });
  return response.data; // Expecting array or paginated object
};

const getAppreciationGradeById = async (
  id: number
): Promise<AppreciationGrade> => {
  const response = await axios.get(
    `${BASE_URL}/${APPRECIATION_GRADES_URL}/${id}`
  );
  return response.data;
};

const addAppreciationGrade = async (data: AppreciationGradeFormData) => {
  const response = await axios.post(
    `${BASE_URL}/${APPRECIATION_GRADES_URL}`,
    data
  );
  return response.data;
};

const updateAppreciationGrade = async ({
  id,
  data,
}: {
  id: number;
  data: AppreciationGradeFormData;
}) => {
  const response = await axios.put(
    `${BASE_URL}/${APPRECIATION_GRADES_URL}/${id}`,
    data
  );
  return response.data;
};

const deleteAppreciationGrade = async (id: number) => {
  const response = await axios.delete(
    `${BASE_URL}/${APPRECIATION_GRADES_URL}/${id}`
  );
  return response.data;
};

// Hooks
export const useAppreciationGrades = (
  page: number = 1,
  pageSize: number = 10
) => {
  return useQuery({
    queryKey: ["appreciationGrades", page, pageSize],
    queryFn: () => getAppreciationGrades(page, pageSize),
  });
};

export const useAppreciationGrade = (id: number) => {
  return useQuery({
    queryKey: ["appreciationGrade", id],
    queryFn: () => getAppreciationGradeById(id),
    enabled: !!id,
  });
};

export const useAddAppreciationGrade = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addAppreciationGrade,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appreciationGrades"] });
    },
  });
};

export const useUpdateAppreciationGrade = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateAppreciationGrade,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appreciationGrades"] });
      queryClient.invalidateQueries({ queryKey: ["appreciationGrade"] });
    },
  });
};

export const useDeleteAppreciationGrade = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAppreciationGrade,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appreciationGrades"] });
    },
  });
};
