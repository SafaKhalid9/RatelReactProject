import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ratil.tryasp.net/api',
    // withCredentials: true, // مهم للكوكيز
});

export default api;
