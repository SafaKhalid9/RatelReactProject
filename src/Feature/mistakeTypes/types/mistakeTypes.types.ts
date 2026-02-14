export type MistakeType = {
  id: number;
  name: string;
  degree: number;
};

export type MistakeTypeResponse = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: {
    data: MistakeType[];
    pagination: Pagination;
  };
  errors: any;
};

export type MistakeTypeDetailsResponse = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: MistakeType;
  errors: any;
};

type Pagination = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  search: any;
  shift: any;
};
