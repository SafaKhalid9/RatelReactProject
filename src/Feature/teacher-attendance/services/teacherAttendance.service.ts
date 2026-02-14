import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios"; 
import { AxiosError } from "axios"; 
import type { 
  TeacherAttendanceQueryParams, 
  AttendanceListResponse, 
  AttendanceSubmissionData 
} from "../types/teacherAttendance.types";

const getDailyAttendance = async (params: TeacherAttendanceQueryParams): Promise<AttendanceListResponse> => {

  const res = await api.get(`/teacher-attendance/daily`, { 
    params: {
      date: params.date,
      shiftType: params.shiftType,
      page: params.page,
      search: params.search 
    } 
  });
  
  const rawData = res.data.data;
  return {
    data: Array.isArray(rawData) ? rawData : (rawData?.data || []),
    pagination: rawData?.pagination || { totalPages: 1 },
  };
};

export const useTeacherAttendance = (params: TeacherAttendanceQueryParams) =>
  useQuery({
    queryKey: ["teacher-attendance", params.date, params.shiftType, params.page, params.search],
    queryFn: () => getDailyAttendance(params),
  });

export const useAddUpdateAttendance = () => {
  const qc = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: AttendanceSubmissionData) => {
      const res = await api.post(`/teacher-attendance/addupdate`, data);
      return res.data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["teacher-attendance"] });
      alert("تم حفظ التحضير بنجاح");
    },
    onError: (error: unknown) => {
      const axiosError = error as AxiosError<{ message: string }>;
      const msg = axiosError.response?.data?.message || "حدث خطأ أثناء الحفظ";
      alert(msg);
    }
  });
};