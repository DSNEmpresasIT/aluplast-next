import { API_ENDPOINTS } from "@/utils/endpoints";
import { API_SERVICE } from "./api";

const CLIENT_ID = process.env.CLIENT_ID;

export async function getProjectTypes() {
  try {
    const response = await API_SERVICE({
      method: 'GET',
      url: `/cms/${CLIENT_ID}/projects-types`
    })

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export async function getAllProjects(page: number, limit: number, search: string) {
  try {
    const response = await API_SERVICE({
      method: 'GET',
      url: `${API_ENDPOINTS.GET_PROYECTS}?page=${page}&limit=${limit}&search=${search}`
    })

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProjectDetail(projectId: string) {
  try {
    const response = await API_SERVICE({
      method: 'GET',
      url: `${API_ENDPOINTS.GET_PROYECT}/${projectId}`,
    })

    return response.data;
  } catch (error) {
    throw new Error()
  }
}
