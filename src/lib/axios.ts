import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ratil.tryasp.net/api",
});

apiClient.interceptors.request.use(
  async (config) => {
    config.headers = config.headers ?? {};
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default apiClient;
