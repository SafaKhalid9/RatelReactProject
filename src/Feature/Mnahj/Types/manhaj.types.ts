export interface Manhaj {
    id: string;
    name: string;
    authorName: string;
    targetAudience: string;
    numberOfLessons: number;
    goals: string;
    imageUrl?: string;
    pdfUrl?: string;
}

export interface ManhajFormData {
    name: string;
    authorName: string;
    targetAudience: string;
    numberOfLessons: string | number;
    goals: string;
    imageFile?: File;
    pdfFile?: File; // Optional if editing and not changing
}

export interface ManhajListItem {
    id: string;
    name: string;
    authorName: string;
    numberOfLessons: number;
    targetAudience: string;
}
