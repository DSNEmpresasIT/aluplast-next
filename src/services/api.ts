import axios from "axios";

export const API_SERVICE = axios.create({
  // baseURL: process.env.GLOBAL_API_BASE_URL_DEVELOPMENT,
  baseURL: process.env.GLOBAL_API_BASE_URL_PRODUCTION,
  timeout: 3000,
}) 
