import * as React from 'react';
import PropTypes from 'prop-types';

function Image({ altDescription, url }) {
  return <img alt={altDescription} src={url} />;
}

Image.propTypes = {
  altDescription: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Image;
