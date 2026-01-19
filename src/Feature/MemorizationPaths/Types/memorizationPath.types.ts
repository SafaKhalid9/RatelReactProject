export interface MemorizationPath {
  pathId: number;
  name: string;
  memorizeFrom: string;
  memorizeTo: string;
}

export interface MemorizationPathDetails extends MemorizationPath {
  halaqaIds: number[];
}

export interface MemorizationPathFormData {
  name: string;
  memorizeFrom: string;
  memorizeTo: string;
}

export interface MemorizationPathQueryParams {
  page?: number;
  pageSize?: number;
}
export interface ResponseMemorzationPath {
  isSuccess: boolean
  statusCode: number
  message: string
  data: Data
  errors: any
}

export interface Data {
  data: MemorizationPath[]
  pagination: Pagination
}

export interface MemorizationPath {
  pathId: number
  memorizeFrom: string
  memorizeTo: string
  name: string
}

export interface Pagination {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
  currentPage: number
}
