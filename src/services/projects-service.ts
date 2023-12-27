
const BASE_URL: string = (
    process.env.MODE === 'development' 
    ? process.env.GLOBAL_API_BASE_URL_DEVELOPMENT 
    : process.env.GLOBAL_API_BASE_URL_PRODUCTION
  ) || '';

export async function getProjectTypes() {
  try {
    const response = await (await fetch(`${BASE_URL}/projects/aluplast`)).json();

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
