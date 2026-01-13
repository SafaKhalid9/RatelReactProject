export type HalaqaStatus = 'Beginner' | 'Intermediate' | 'Advanced';

export interface HalaqaListItem {
  halaqaId: number;
  name: string;
  period: string;
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
  status: HalaqaStatus; // Added for Edit
  capacity: number;     // Added for Edit
  teacherId: number;    // Added for Edit
  period: string;
  teacherName: string;
  paths: { pathId: number; name: string }[];
  manhajs: { manhajId: number; name: string }[];
  students: StudentAttendance[];
}

export interface HalaqaFormData {
  name: string;
  status: HalaqaStatus;
  capacity: number;
  teacherID: number;
  period: string;
  selectedPathIds: number[];
  selectedManhajIds: number[];
}

export interface HalaqaReviewParams {
  name?: string;
  academicYearId?: number;
  teacherId?: number;
  page?: number;
  pageSize?: number;
}
