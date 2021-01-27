export default function normalizeData({
  id,
  alt_description: altDescription,
  urls: { small: url },
  links: { html: unsplashLink },
}) {
  return {
    id,
    altDescription,
    url,
    unsplashLink,
  };
}
