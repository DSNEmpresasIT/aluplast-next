import { API_ENDPOINTS } from "@/utils/endpoints";
import { API_SERVICE, BASE_URL } from "./api";
import axios from "axios";

export async function getAllProducts(categoryId: string | null) {
  try {
    const query = categoryId && !isNaN(+categoryId) 
      ? `${API_ENDPOINTS.GET_ALL_PRODUCTS_BY_CATEGORY}/${categoryId}` 
      : API_ENDPOINTS.GET_ALL_PRODUCTS


    const response = await BASE_URL({
      method: 'GET',
      url: query
    })
   
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error in getAllProducts service')
  }
} 

export async function getProductById(productId: string) {
  try {

    const response = await BASE_URL({
      method: 'GET',
      url: API_ENDPOINTS.GET_PRODUCT_BY_ID+`/${productId}`
    })

    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Error in getProductById service')
  }
}
