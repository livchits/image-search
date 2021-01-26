import * as React from 'react';
import PropTypes from 'prop-types';

//<div className="flex flex-col items-center w-10/12 mx-auto lg:block lg:masonry">

import Image from './Image';

function ImagesFound({ dataImages }) {
  return (
    <div className="flex flex-col items-center w-10/12 mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly">
      {dataImages.length === 0 ? (
        <p className="px-6 py-12 mt-12 font-mono text-xl leading-relaxed text-center text-gray-800 bg-gray-700 rounded-lg shadow-sm max-w-max bg-opacity-5">
          {"Sorry, we couldn't found any image"}{' '}
          <span aria-label="A sorry emoji face" role="img">
            😔
          </span>
        </p>
      ) : (
        dataImages.map(({ id, altDescription, url }) => (
          <Image key={id} altDescription={altDescription} url={url} />
        ))
      )}
    </div>
  );
}

ImagesFound.propTypes = {
  dataImages: PropTypes.arrayOf(PropTypes.object),
};

export default ImagesFound;
