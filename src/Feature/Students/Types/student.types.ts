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
  studentId: number;
  name: string;
  birthDate: string;
  phoneNumber: string;
  address: string;
  beginOfMemorize: string;
  currentEducationalLevel: string;
  educationalQualification: string;
  halaqaId: number;
  parentId?: number;
  halaqaName: string;
  parentName?: string;
}

export interface ApiResponse<T> {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: T;
  errors: Record<string, string> | null;
}

export interface StudentFormData {
  name: string;
  birthDate: string; 
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

export interface StudentsListResponse {
  data: StudentListItem[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface ParentOption {
  id: number;
  name: string;
}
export interface HalaqaApiItem {
  halaqaId: number;
  name: string;
}

export interface StudentQueryParams {
  page?: number;
  pageSize?: number;
  search?: string;
}




