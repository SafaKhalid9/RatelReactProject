export type HalaqaStatus = "Beginner" | "Intermediate" | "Advanced";

export interface HalaqaListItem {
  halaqaId: number;
  name: string;
  period: string;
  teacherId: number;
  teacherName: string;
  status: HalaqaStatus;
  numberOfStudents: number;
  paths: string[];
  manhajs: string[];
  averageAttendancePercentage: number;
}

export interface StudentAttendance {
  studentId: number;
  name: string;
  sessionsAttended: number;
  attendancePercentage: number;
  memorizedPages: number;
}

export interface HalaqaDetails {
  id: number;
  name: string;
  period: string;
  teacherId: number;
  capacity: number;
  paths: { pathId: number; name: string }[];
  manhajs: { manhajId: number; name: string }[];
  averageAttendancePercentage: number;
  totalMemorizedPages: number;
  students: StudentAttendance[];
}
export interface Teacher {
  id: number;
  fullName: string;
}

export interface HalaqaFormData {
  name: string;
  status: string;
  capacity: number;
  teacherId: number;
  period: string;
  pathIds: number[];
  manhajIds: number[];
}

export interface HalaqaReviewParams {
  name?: string;
  academicYearId?: number;
  teacherId?: number;
  page?: number;
  pageSize?: number;
}
