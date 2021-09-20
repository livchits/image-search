import * as React from 'react';
import type { NormalizedImageData } from 'src/types';

function Image({ altDescription, url, unsplashLink }: NormalizedImageData) {
  return (
    <a
      className="my-4 transition-all transform hover:shadow-lg hover:scale-105"
      href={unsplashLink}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img alt={altDescription} src={url} />
    </a>
  );
}

export default Image;
