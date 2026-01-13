export interface StudentListItem {
  studentId: number;
  name: string;
  phoneNumber: string;
  address: string;
  halaqaId: number;
  halaqaName: string;
  parentId: number;
  parentName: string;
}

export interface StudentDetails {
  id: number;
  name: string;
  birthDate: string;
  parentName: string;
  studyPeriod: string;
  memorizationTrack: string; // Assuming mapped from field like 'track' or derived
  attendanceRate: number;
  memorizationAndReviewRating: number;
  address: string;
  phoneNumber: string;
  manahjs: string[];
}

export interface StudentFormData {
  name: string;
  birthDate: string; // ISO String or YYYY-MM-DD
  phoneNumber: string;
  address: string;
  beginOfMemorize: string;
  currentEducationalLevel: string;
  educationalQualification: string;
  halaqaId: number;
  parentId?: number;
  addNewParent: boolean;
  newParent?: {
    name: string;
    phoneNumber: string;
  };
}

export interface StudentQueryParams {
  page?: number;
  pageSize?: number;
  name?: string;
  halaqaId?: number;
}
