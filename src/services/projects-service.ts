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

export async function getAllProjects() {
  try {
    const response = await API_SERVICE({
      method: 'GET',
      url: `/projects/client/${CLIENT_ID}`
    })

    return response.data.projects
  } catch (error) {
    console.log(error);
  }
}

export async function getProjectDetail(projectId: string) {
  try {
    const response = await API_SERVICE({
      url: `/projects/${projectId}`,
      method: 'GET'
    })

    return response.data;
  } catch (error) {
    throw new Error()
  }
}
