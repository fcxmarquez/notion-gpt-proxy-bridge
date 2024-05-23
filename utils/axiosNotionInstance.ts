import axios from "axios";
import { config as configEnv } from "@/config/config";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.set("Notion-Version", configEnv.notionVersion);
    config.headers.set("Content-Type", "application/json");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
