const URL = import.meta.env.SNOWPACK_PUBLIC_API_URL;
const ACCESS_KEY = import.meta.env.SNOWPACK_PUBLIC_API_ACCESS_KEY;
const ENDPOINT = `${URL}client_id=${ACCESS_KEY}&page=1&query=`;

async function getImages(query) {
  const response = await fetch(`${ENDPOINT}${query}`);
  const { results } = await response.json();
  return results;
}

export default getImages;
