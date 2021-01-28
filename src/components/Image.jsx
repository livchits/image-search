import * as React from 'react';
import PropTypes from 'prop-types';

function Image({ altDescription, url, unsplashLink }) {
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

Image.propTypes = {
  altDescription: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  unsplashLink: PropTypes.string.isRequired,
};

export default Image;
