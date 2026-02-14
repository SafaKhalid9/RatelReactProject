export type ExamsResponse = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: Data;
  errors: any;
};

type Data = {
  data: ExamType[];
  pagination: Pagination;
};

export type ExamType = {
  id: number;
  examDegree: number;
  halaqaIds: number[];
  halaqaNames: string[];
  manhajIds: number[];
  manhajNames: string[];
  teacherIds: number[];
  teacherNames: string[];
  startDateTime: string;
  endDateTime: string;
  userId: number;
  notes: string;
  examTypeId: number;
  examTypeName: string;
  examCategory: string;
};

export type ExamDetailsResponse = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: ExamType;
  errors: any;
};

type Pagination = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
};
