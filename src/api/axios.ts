import axios from "axios";
import { getAuthToken } from "./services/auth.service";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_API_URL não definida.");
}

const api = axios.create({ baseURL });

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
