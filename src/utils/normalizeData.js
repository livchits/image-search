export default function normalizeData({
  id,
  alt_description: altDescription,
  urls: { small: url },
}) {
  return {
    id,
    altDescription,
    url,
  };
}
