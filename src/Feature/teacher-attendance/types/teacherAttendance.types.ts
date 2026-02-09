// export interface TeacherAttendanceItem {
//   teacherAttendanceId: number;
//   teacherName: string;
//   halaqaName: string;
//   teacherId: number;
//   halaqaId: number;
//   attendanceStatus: "حاضر" | "غائب" | "متأخر" | null;
//   date: string;
// }

// export interface AttendanceListResponse {
//   data: TeacherAttendanceItem[];
//   pagination: {
//     page: number;
//     pageSize: number;
//     totalItems: number;
//     totalPages: number;
//     currentPage: number;
//   };
// }

// export interface TeacherAttendanceQueryParams {
//   date: string;
//   page?: number;
//   pageSize?: number;
//   search?: string;
// }

// // لعملية الإضافة أو التحديث (POST)
// export interface AttendanceSubmissionData {
//   teacherId: number;
//   halaqaId: number;
//   status: string;
//   date: string;
// }









export interface TeacherAttendanceItem {
  teacherAttendanceId: number;
  teacherName: string;
  halaqaName: string;
  teacherId: number;
  halaqaId: number;
  attendanceStatus: string; // سيأتي من الباك كـ "Present", "Absent", "Late"
  date: string;
  shiftType: "Morning" | "Evening";
  mode: string;
  isEditable: boolean;
}

export interface AttendanceListResponse {
  data: TeacherAttendanceItem[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface TeacherAttendanceQueryParams {
  date: string;
  shiftType: string;
  page?: number;
  pageSize?: number;
  search?: string;
}

// الهيكلية الجديدة لطلب الـ POST
export interface AttendanceSubmissionData {
  date: string;
  shiftType: string;
  items: {
    teacherId: number;
    halaqaId: number;
    attendanceStatus: string;
  }[];
}