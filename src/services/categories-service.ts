import { API_ENDPOINTS } from "@/utils/endpoints";
import { API_SERVICE, BASE_URL } from "./api";
import axios from "axios";

export async function getAllCategories(categoryId?: string | null) {
  try {
    const query = (categoryId && !isNaN(+categoryId)) 
    ? API_ENDPOINTS.GET_CATEGORIES + `?categoryId=${categoryId}&front=true` 
    : API_ENDPOINTS.GET_CATEGORIES;

    const response = await BASE_URL({
      method: 'GET',
      url: query,
    });

    return response.data;
  } catch (error) {
    //@ts-ignore
    throw new Error(error.message)
  }
}
