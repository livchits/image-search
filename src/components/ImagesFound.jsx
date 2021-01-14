import * as React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

function ImagesFound({ dataImages }) {
  return (
    <div className="w-11/12 mx-auto">
      {dataImages.length === 0 ? (
        <p>
          {"Sorry, we couldn't found any image"}{' '}
          <span aria-label="A sorry emoji face" role="img">
            😔
          </span>
        </p>
      ) : (
        dataImages.map(
          ({ id, alt_description: altDescription, urls: { small: url } }) => (
            <Image key={id} altDescription={altDescription} url={url} />
          ),
        )
      )}
    </div>
  );
}

ImagesFound.propTypes = {
  dataImages: PropTypes.arrayOf(PropTypes.object),
};

export default ImagesFound;
