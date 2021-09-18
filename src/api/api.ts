import type { ImageData, NormalizedImageData } from './../types/index';
import normalizeData from 'src/utils/normalizeData';

const URL = import.meta.env.SNOWPACK_PUBLIC_API_URL;
const ACCESS_KEY = import.meta.env.SNOWPACK_PUBLIC_API_ACCESS_KEY;

interface ApiResponse {
  data: [] | NormalizedImageData[];
  error?: unknown;
}

async function api(
  query: string,
  abortController: AbortController,
): Promise<ApiResponse> {
  try {
    const response = await fetch(`${URL}${query}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
        'Accept-Version': 'v1',
      },
      signal: abortController.signal,
    });
    if (response.ok) {
      const { results }: { results: ImageData[] } = await response.json();
      const data = results.map(normalizeData);
      return { data };
    }
    throw new Error(response.statusText);
  } catch (error) {
    return { error, data: [] };
  }
}

export default api;
