import * as React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import Alert from './Alert';

function ImagesFound({ dataImages }) {
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

ImagesFound.propTypes = {
  dataImages: PropTypes.arrayOf(PropTypes.object),
};

export default ImagesFound;
