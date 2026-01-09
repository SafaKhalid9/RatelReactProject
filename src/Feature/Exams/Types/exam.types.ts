export type ExamCategory = 'Manhaj' | 'Memorization';

export interface ExamListItem {
  id: number;
  examDegree: number;
  halaqaId: number;
  halaqaName: string;
  manhajId: number | null;
  manhajName: string | null;
  startDateTime: string;
  endDateTime: string;
  notes: string;
  examTypeId: number;
  examTypeName: string;
  examCategory: ExamCategory;
}

export interface ExamDetails extends ExamListItem {
  userId: number; // Represents the teacher or proctor
  userName?: string; // Optional if returned by backend for display
}

export interface ExamFormData {
  examDegree: number;
  halaqaId: number;
  manhajId?: number | null;
  startDateTime: string;
  endDateTime: string;
  userId: number;
  notes: string;
  examTypeId: number;
  examCategory: ExamCategory;
}

export interface ExamQueryParams {
  page?: number;
  pageSize?: number;
}
