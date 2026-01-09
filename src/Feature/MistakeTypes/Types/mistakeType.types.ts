export interface MistakeType {
    id: number;
    name: string;
    degree: number; // The logic penalty degree
}

export interface MistakeTypeFormData {
    name: string;
    penaltyPerMistake: number; // Maps to 'degree' in backend logic often, but spec requires this key for payload
}

export interface MistakeTypeResponse {
    data: MistakeType[];
    // Add pagination fields if known, otherwise generic structure
    totalCount?: number;
    pageNumber?: number;
    pageSize?: number;
}
