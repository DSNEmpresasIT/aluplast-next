import axios from "axios";

console.log(process.env.GLOBAL_API);

export const API_SERVICE = axios.create({
  baseURL: process.env.GLOBAL_API,
  timeout: 3000,
}) 
