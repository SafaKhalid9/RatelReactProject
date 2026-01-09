export interface UserListItem {
  id: number;
  userName: string;
  role: string;
  phoneNumber: string;
  location: string;
  hasLicence: boolean;
}

export interface UserDetails extends UserListItem {
    email: string;
    birthDate?: string;
    qualification?: string;
    experience?: string;
    courses?: string;
    socialStatus?: string;
    amountOfMemorization?: string;
    job?: string;
    identityNumber?: string;
    passportNumber?: string;
}

export interface UserFormData {
  userName: string;
  email: string;
  password?: string; // Optional on edit
  role: string;
  phoneNumber: string;
  location: string; // Address
  
  // Extended fields based on Form
  identityNumber?: string;
  birthDate?: string;
  qualification?: string;
  experience?: string;
  courses?: string;
  socialStatus?: string;
  amountOfMemorization?: string;
  passportNumber?: string;
  job?: string;
}

export interface UserQueryParams {
  page?: number;
  pageSize?: number;
  role?: string;
  search?: string;
}
