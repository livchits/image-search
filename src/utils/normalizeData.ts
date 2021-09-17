import type { ImageData, NormalizedImageData } from './../types/index';

export default function normalizeData({
  id,
  alt_description: altDescription,
  urls: { small: url },
  links: { html: unsplashLink },
}: ImageData): NormalizedImageData {
  return {
    id,
    altDescription,
    url,
    unsplashLink,
  };
}
