import normalizeData from '../utils/normalizeData';

const URL = import.meta.env.SNOWPACK_PUBLIC_API_URL;
const ACCESS_KEY = import.meta.env.SNOWPACK_PUBLIC_API_ACCESS_KEY;

async function api(query, abortController) {
  try {
    const response = await fetch(`${URL}${query}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
        'Accept-Version': 'v1',
      },
      signal: abortController.signal,
    });
    if (response.ok) {
      const { results } = await response.json();
      const data = results.map(normalizeData);
      return { data };
    }
    throw new Error(response.statusText);
  } catch (error) {
    return { error };
  }
}

export default api;
