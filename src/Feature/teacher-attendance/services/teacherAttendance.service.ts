// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import api from "@/api/axios"; // تأكد من مسار الاكسيوس الخاص بك
// import type { TeacherAttendanceQueryParams, AttendanceListResponse } from "../types/teacherAttendance.types";

// // الدالة الأساسية لجلب البيانات
// const getDailyAttendance = async (params: TeacherAttendanceQueryParams): Promise<AttendanceListResponse> => {
//   const res = await api.get(`/teacher-attendance/daily`, { params });
//   return {
//     data: res.data.data.data,
//     pagination: res.data.data.pagination,
//   };
// };

// // هوك جلب البيانات
// export const useTeacherAttendance = (params: TeacherAttendanceQueryParams) =>
//   useQuery({
//     queryKey: ["teacher-attendance", params.date, params.page, params.search],
//     queryFn: () => getDailyAttendance(params),
//     placeholderData: (previousData) => previousData, // لتحسين تجربة المستخدم أثناء التنقل
//   });

// // هوك لتحديث التحضير (إذا توفرت الاندبوينت)
// export const useUpdateAttendance = () => {
//   const qc = useQueryClient();
//   return useMutation({
//     mutationFn: async (data: any) => {
//       return await api.post(`/teacher-attendance`, data);
//     },
//     onSuccess: () => {
//       qc.invalidateQueries({ queryKey: ["teacher-attendance"] });
//     },
//   });
// };






// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import api from "@/api/axios"; 
// import type { 
//   TeacherAttendanceQueryParams, 
//   AttendanceListResponse,
//   AttendanceSubmissionData // تأكد أنك أضفت هذا النوع في ملف types
// } from "../types/teacherAttendance.types";

// // الدالة الأساسية لجلب البيانات
// const getDailyAttendance = async (params: TeacherAttendanceQueryParams): Promise<AttendanceListResponse> => {
//   const res = await api.get(`/teacher-attendance/daily`, { params });
//   return {
//     data: res.data.data.data,
//     pagination: res.data.data.pagination,
//   };
// };

// // هوك جلب البيانات
// export const useTeacherAttendance = (params: TeacherAttendanceQueryParams) =>
//   useQuery({
//     queryKey: ["teacher-attendance", params.date, params.page, params.search],
//     queryFn: () => getDailyAttendance(params),
//     placeholderData: (previousData) => previousData, 
//   });

// // هوك لتحديث التحضير - تم تعديله لإزالة any
// export const useUpdateAttendance = () => {
//   const qc = useQueryClient();
  
//   return useMutation({
//     // استبدلنا any بنوع البيانات الحقيقي الذي يتوقعه السيرفر
//     mutationFn: async (data: AttendanceSubmissionData) => {
//       const res = await api.post(`/teacher-attendance`, data);
//       return res.data;
//     },
//     onSuccess: () => {
//       // إجبار التابليت على تحديث البيانات فور نجاح التعديل
//       qc.invalidateQueries({ queryKey: ["teacher-attendance"] });
//     },
//   });
// };









import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/axios"; 
import type { 
  TeacherAttendanceQueryParams, 
  AttendanceListResponse,
  AttendanceSubmissionData 
} from "../types/teacherAttendance.types";

const getDailyAttendance = async (params: TeacherAttendanceQueryParams): Promise<AttendanceListResponse> => {
  // إضافة v=1.0 حسب طلب الـ Swagger الخاص بك إذا لزم الأمر في الـ headers
  const res = await api.get(`/teacher-attendance/daily`, { params });
  return {
    data: res.data.data.data,
    pagination: res.data.data.pagination,
  };
};

export const useTeacherAttendance = (params: TeacherAttendanceQueryParams) =>
  useQuery({
    queryKey: ["teacher-attendance", params.date, params.shiftType, params.page, params.search],
    queryFn: () => getDailyAttendance(params),
    placeholderData: (previousData) => previousData, 
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
  });
};