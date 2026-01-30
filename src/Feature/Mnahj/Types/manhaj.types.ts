export type ManhajApiItem = {
  manhajId: number;
  name: string;
  authorName: string;
  targetAudionce: string;
  numberOfLessons: number;
};
export type Manhaj = {
  manhajId: number;
  name: string;
  authorName: string;
  numberOfLessons: number;
  targetAudience: string;
  goals: string;
  imageUrl?: string;
  pdfFilePath?: string;
};

export type ManhajListResponse = {
  data: Manhaj[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
};

export type ManhajFormData = {
  name: string;
  authorName: string;
  targetAudience: string;
  numberOfLessons: number;
  goals: string;
  imageFile?: File;
  pdfFile?: File;
};
export type ManhajFormProps = {
  mode: "add" | "edit";
  defaultValues?: ManhajFormData;
  currentImageUrl?: string;
  currentPdfUrl?: string;
  onSubmit: (data: ManhajFormData) => void;
  isLoading?: boolean;
};
