export interface TeacherAttendanceItem {
  teacherAttendanceId: number;
  teacherName: string;
  halaqaName: string;
  teacherId: number;
  halaqaId: number;
  attendanceStatus: string;
  date: string;
  shiftType: "Morning" | "Evening";
  mode: string;
  isEditable: boolean;
}

export interface AttendanceListResponse {
  data: TeacherAttendanceItem[];
  pagination: {
  totalPages: number;
  page?: number;
  pageSize?: number;
  totalItems?: number;
  };
}

export interface TeacherAttendanceQueryParams {
  date: string;
  shiftType: string;
  page?: number;
  pageSize?: number;
  search?: string;
}

export interface AttendanceSubmissionData {
  date: string;
  shiftType: string;
  items: {
    teacherId: number;
    halaqaId: number;
    attendanceStatus: string;
  }[];
}