// // src/Feature/Students/Services/student.service.ts
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';
// import { BASE_URL, STUDENTS } from '@/Constant/route';
// import { 
//   StudentListItem, 
//   StudentDetails, 
//   StudentFormData, 
//   StudentQueryParams 
// } from '../Types/student.types';

// // API Functions
// const getStudents = async (params: StudentQueryParams) => {
//   const queryParams = new URLSearchParams();
//   if (params.page) queryParams.append('page', params.page.toString());
//   if (params.pageSize) queryParams.append('pageSize', params.pageSize.toString());
//   if (params.name) queryParams.append('name', params.name);
//   if (params.halaqaId) queryParams.append('halaqaId', params.halaqaId.toString());

//   const response = await axios.get(`${BASE_URL}/${STUDENTS}`, { params: queryParams });
//   return response.data;
// };

// const getStudentDetails = async (id: number): Promise<StudentDetails> => {
//   const response = await axios.get(`${BASE_URL}/${STUDENTS}/details/${id}`);
//   return response.data;
// };

// const addStudent = async (data: StudentFormData) => {
//   const response = await axios.post(`${BASE_URL}/${STUDENTS}`, data);
//   return response.data;
// };

// const updateStudent = async ({ id, data }: { id: number; data: StudentFormData }) => {
//   const response = await axios.put(`${BASE_URL}/${STUDENTS}/${id}`, data);
//   return response.data;
// };

// const deleteStudent = async (id: number) => {
//   const response = await axios.delete(`${BASE_URL}/${STUDENTS}/${id}`);
//   return response.data;
// };

// // Hooks
// export const useStudents = (params: StudentQueryParams) => {
//   return useQuery({
//     queryKey: ['students', params],
//     queryFn: () => getStudents(params),
//   });
// };

// export const useStudentDetails = (id: number) => {
//   return useQuery({
//     queryKey: ['student', id],
//     queryFn: () => getStudentDetails(id),
//     enabled: !!id,
//   });
// };

// export const useAddStudent = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: addStudent,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['students'] });
//     },
//   });
// };

// export const useUpdateStudent = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: updateStudent,
//     onSuccess: (_, variables) => {
//         queryClient.invalidateQueries({ queryKey: ['students'] });
//         queryClient.invalidateQueries({ queryKey: ['student', variables.id] });
//     },
//   });
// };

// export const useDeleteStudent = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: deleteStudent,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['students'] });
//     },
//   });
// };



// src/Feature/Students/Services/student.service.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios";
import { STUDENTS } from "@/Constant/route";

import type {
  StudentListItem,
  StudentDetails,
  StudentFormData,
  StudentQueryParams,
} from "../Types/student.types";

/* ===================== API FUNCTIONS ===================== */

// const getStudents = async (params: StudentQueryParams) => {
//   const res = await api.get(`/${STUDENTS}`, { params });
//   return res.data.data as StudentListItem[];
// };

interface StudentsResponse {
  data: StudentListItem[];
  pagination: {
    page: number;
    totalPages: number;
    totalItems: number;
  };
}

const getStudents = async (params: StudentQueryParams) => {
  const res = await api.get(`/${STUDENTS}`, { params });
  return res.data as StudentsResponse;
};

// const getStudentDetails = async (id: number) => {
//   const res = await api.get(`/${STUDENTS}/details/${id}`);
//   return res.data.data as StudentDetails;
// };
const getStudentById = async (id: number) => {
  const res = await api.get(`/${STUDENTS}/${id}`);
  return res.data.data as StudentDetails;
};


const addStudent = async (data: StudentFormData) => {
  const res = await api.post(`/${STUDENTS}`,data);
  return res.data;
};

const updateStudent = async ({
  id,
  data,
}: {
  id: number;
  data: StudentFormData;
}) => {
  const res = await api.put(`/${STUDENTS}/${id}`, data);
  return res.data;
};

const deleteStudent = async (id: number) => {
  const res = await api.delete(`/${STUDENTS}/${id}`);
  return res.data;
};

/* ===================== HOOKS ===================== */

export const useStudents = (params: StudentQueryParams) =>
  useQuery({
    queryKey: ["students", params],
    queryFn: () => getStudents(params),
  });

// export const useStudentDetails = (id: number) =>
//   useQuery({
//     queryKey: ["student", id],
//     queryFn: () => getStudentDetails(id),
//     enabled: !!id,
//   });
export const useStudentDetails = (id: number) =>
  useQuery({
    queryKey: ["student", id],
    queryFn: () => getStudentById(id),
    enabled: !!id,
  });


export const useAddStudent = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["students"] });
    },
  });
};

export const useUpdateStudent = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: updateStudent,
    onSuccess: (_, v) => {
      qc.invalidateQueries({ queryKey: ["students"] });
      qc.invalidateQueries({ queryKey: ["student", v.id] });
    },
  });
};

export const useDeleteStudent = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["students"] });
    },
  });
};
