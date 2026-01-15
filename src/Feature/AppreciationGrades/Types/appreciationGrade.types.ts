export interface AppreciationGrade {
  id: number;
  appreciationId: number;
  appreciationName?: string; // Optional display name if backend returns it
  minimumScore: number;
  maximumScore: number;
}

export interface AppreciationGradeFormData {
  appreciationId: number;
  minimumScore: number;
  maximumScore: number;
}
