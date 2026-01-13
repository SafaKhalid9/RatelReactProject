import axios from "axios";

const api = axios.create({
  baseURL: "https://ratil.tryasp.net/api",
});

export default api;
