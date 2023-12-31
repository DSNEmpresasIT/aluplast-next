const BASE_URL: string =
  (process.env.MODE === "development"
    ? process.env.GLOBAL_API_BASE_URL_DEVELOPMENT
    : process.env.GLOBAL_API_BASE_URL_PRODUCTION) || "";

const CLIENT_ID = process.env.CLIENT_ID;

export async function getProjectTypes() {
  try {
    const response = await (await fetch(`${BASE_URL}/cms/${CLIENT_ID}/projects-types`)).json();

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export async function getAllProjects() {
  try {
    const response = await (
      await fetch(`${BASE_URL}/projects/client/${CLIENT_ID}`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Access-Control-Allow-Headers': 'Set-Cookie'
        },
      })
    ).json();

    return response.projects
  } catch (error) {
    console.log(error);
  }
}

export async function getProjectDetail(projectId: string) {
  try {
    const response = await (
      await fetch(`${BASE_URL}/projects/${projectId}`)
    ).json()

    if (response.error) throw new Error('Proyecto no encontrado')

    return response;
  } catch (error) {
    throw new Error()
  }
}
