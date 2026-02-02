import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios";
import { STUDENTS } from "@/Constant/route";
import type {
  StudentDetails,
  ApiResponse,
  StudentFormData,
  StudentQueryParams,
  ParentOption,
  HalaqaApiItem,
  StudentsListResponse
} from "../Types/student.types";


const getStudents = async (
  params: StudentQueryParams
): Promise<StudentsListResponse> => {
  const res = await api.get(`/${STUDENTS}`, { params });

  return {
    data: res.data.data.data,
    pagination: res.data.data.pagination,
  };
};




export const getStudentById = async (id: number): Promise<StudentDetails> => {
  const response = await api.get<ApiResponse<StudentDetails>>(`/students/${id}`);
  return response.data.data; 
};

const addStudent = async (data: StudentFormData) => {
  const res = await api.post(`/${STUDENTS}`, data);
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


export const useStudents = (params: StudentQueryParams) =>
  useQuery<StudentsListResponse>({
    queryKey: ["students",
    params.page,
    params.pageSize,
    params.search,],
    queryFn: () => getStudents(params),
  });

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
      qc.invalidateQueries({ queryKey: ["parents"] }); 
    },
  });
};

export const useUpdateStudent = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updateStudent,
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ["students"] });
      qc.invalidateQueries({ queryKey: ["student", variables.id] });
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

export const getHalaqas = async (): Promise<{ id: number; name: string }[]> => {
  const res = await api.get("/halaqas", {
    params: {
      page: 1,
      pageSize: 1000, 
    },
  });

  return res.data.data.data.map((h: HalaqaApiItem) => ({
    id: h.halaqaId,
    name: h.name,
  }));
};
export const useHalaqas = () =>
  useQuery({
    queryKey: ["halaqas"],
    queryFn: getHalaqas,
  });

export const getParents = async (): Promise<ParentOption[]> => {
  const res = await api.get("/students/parents");
  return res.data.data;
};

export const useParents = () =>
  useQuery({
    queryKey: ["parents"],
    queryFn: getParents,
});
