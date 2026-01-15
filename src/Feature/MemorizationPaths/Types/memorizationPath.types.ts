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