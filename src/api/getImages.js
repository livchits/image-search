const URL = import.meta.env.SNOWPACK_PUBLIC_API_URL;
const ACCESS_KEY = import.meta.env.SNOWPACK_PUBLIC_API_ACCESS_KEY;

async function getImages(query) {
  const response = await fetch(`${URL}${query}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
      'Accept-Version': 'v1',
    },
  });
  const { results } = await response.json();
  return results;
}

export default getImages;
