import * as React from 'react';
import PropTypes from 'prop-types';

function Image({ altDescription, url }) {
  return (
    <img alt={altDescription} className="my-4 lg:break-inside" src={url} />
  );
}

Image.propTypes = {
  altDescription: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Image;
