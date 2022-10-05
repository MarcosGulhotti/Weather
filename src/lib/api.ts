import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../config";

const RequestInterceptor = (config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {
      "X-RapidAPI-Key": "c11d64ab49msh6d49e2b9626054bp11b55cjsn5e1972a0cad3",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    };
  }

  config.headers.Accept = "application/json";
  return config;
};

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(RequestInterceptor);
