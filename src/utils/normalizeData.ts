interface Data {
  id: string;
  alt_description: string;
  urls: { small: string };
  links: { html: string };
}

interface NormalizedData {
  id: string;
  altDescription: string;
  url: string;
  unsplashLink: string;
}

export default function normalizeData({
  id,
  alt_description: altDescription,
  urls: { small: url },
  links: { html: unsplashLink },
}: Data): NormalizedData {
  return {
    id,
    altDescription,
    url,
    unsplashLink,
  };
}
