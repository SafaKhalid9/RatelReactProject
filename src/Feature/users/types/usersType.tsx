export type UsersResponse = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: Data;
  errors: any;
};

type Data = {
  data: UserType[];
  pagination: Pagination;
};

export type UserType = {
  address: string;
  isMojaz: boolean;
  nationalId: any;
  maritalStatus: any;
  education: any;
  jobTitle: any;
  memorizationLevel: any;
  passportNumber: any;
  teacher: any;
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  teacherId: any;
  userName: any;
  amountOfMemorization: any;
  roles: string[];
};

export type TeacherType = {
  teacherId: number;
  amountOfMemorization: string;
  jobTitle: string;
  education: string;
  experience: string;
  courses: string;
  nationalId: string;
  maritalStatus: string;
  memorizationLevel: string;
  passportNumber: string;
  isMojaz: boolean;
};

export type UserDetailsResponse = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: UserType;
  errors: any;
};

type Pagination = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
};
