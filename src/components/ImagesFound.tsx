import * as React from 'react';

import Image from './Image';
import Alert from './Alert';
import type { NormalizedImageData } from 'src/types';

interface ImagesFoundProps {
  dataImages: NormalizedImageData[];
}

function ImagesFound({ dataImages }: ImagesFoundProps) {
  return (
    <div className="flex flex-col items-center w-10/12 mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly">
      {dataImages.length === 0 ? (
        <Alert>
          {"Sorry, we couldn't find any image"}{' '}
          <span aria-label="A sorry emoji face" role="img">
            😔
          </span>
        </Alert>
      ) : (
        dataImages.map(({ id, altDescription, url, unsplashLink }) => (
          <Image
            key={id}
            altDescription={altDescription}
            unsplashLink={unsplashLink}
            url={url}
          />
        ))
      )}
    </div>
  );
}

export default ImagesFound;
