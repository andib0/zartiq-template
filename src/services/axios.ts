import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://api.example.com", // placeholder
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      toast.error(`Unauthorized: ${error.response.data.message}`);
      // redirect to login maybe
    } else if (status >= 500) {
      toast.error(`Server error: ${error.response.data.message}`);
      //internal error
    }
    return Promise.reject(error);
  }
);

export default api;
