import { API_ENDPOINTS } from "@/utils/endpoints";
import { API_SERVICE } from "./api";

export async function getAllCategories(categoryId?: string | null) {
  try {
    const query = (categoryId && !isNaN(+categoryId)) 
    ? API_ENDPOINTS.GET_CATEGORIES + `?categoryId=${categoryId}` 
    : API_ENDPOINTS.GET_CATEGORIES;

    const response = await API_SERVICE({
      method: 'GET',
      url: query,
    });

    return response.data;
  } catch (error) {
    //@ts-ignore
    throw new Error(error.message)
  }
}
