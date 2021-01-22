import normalizeData from '../utils/normalizeData';

const URL = import.meta.env.SNOWPACK_PUBLIC_API_URL;
const ACCESS_KEY = import.meta.env.SNOWPACK_PUBLIC_API_ACCESS_KEY;

async function api(query) {
  try {
    const response = await fetch(`${URL}${query}`, {
      // const response = await fetch(
      //   `https://api.unsplash.com/search/photos?page=1&quer=
      // ${query}`,
      //   {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
        'Accept-Version': 'v1',
      },
    });
    if (response.ok) {
      const { results } = await response.json();
      const data = results.map(normalizeData);
      return { data, error: !response.ok };
    }
    throw new Error(response.statusText);
  } catch (error) {
    return { error: true, message: error.message };
  }
}

export default api;
