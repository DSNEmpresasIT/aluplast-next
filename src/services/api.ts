import axios from "axios";

console.log(process.env.GLOBAL_API_BASE_URL)

export const API_SERVICE = axios.create({
  baseURL: process.env.GLOBAL_API,
  timeout: 3000,
}) 

export const BASE_URL = axios.create({
  baseURL: process.env.GLOBAL_API_BASE_URL_DEVELOPMENT,
  timeout: 3000,
}) 
