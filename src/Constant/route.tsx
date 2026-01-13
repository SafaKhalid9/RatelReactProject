export const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

// users
export const USERS = 'users';

if (!import.meta.env.VITE_BACKEND_BASE_URL) throw new Error('VITE_BACKEND_BASE_URL Not Found In .Env');

// manhajs
export const MANHAJS = 'manhajs';

// halaqas
export const HALAQAS = 'halaqas';

// paths
export const MEMORIZATION_PATHS = 'memorization-paths';

// students
export const STUDENTS = 'students';

// exams
export const EXAMS = 'exams';

if (!import.meta.env.VITE_BACKEND_BASE_URL) throw new Error('VITE_BACKEND_BASE_URL Not Found In .Env');