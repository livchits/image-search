import * as React from 'react';
import PropTypes from 'prop-types';

function ImagesFound({ dataImages }) {
  return (
    <div className="w-11/12 mx-auto">
      {dataImages.map(({ id, alt_description, urls: { small } }) => (
        <div key={id}>
          <img alt={alt_description} src={small} />
        </div>
      ))}
    </div>
  );
}

ImagesFound.propTypes = {
  dataImages: PropTypes.arrayOf(PropTypes.object),
};

export default ImagesFound;