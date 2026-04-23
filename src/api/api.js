import axios from "axios";

const DEFAULT_API_URL = "https://ai-resume-backend-3127.onrender.com";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || DEFAULT_API_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;