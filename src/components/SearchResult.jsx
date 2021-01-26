import * as React from 'react';
import PropTypes from 'prop-types';

import ImagesFound from './ImagesFound';

function SearhResult({ error, dataImages }) {
  if (error) {
    return (
      <div className="w-10/12 px-6 py-12 mx-auto mt-12 font-mono text-xl leading-relaxed text-center text-gray-800 bg-red-700 rounded-lg shadow-sm max-w-max bg-opacity-5">
        Sorry, something went wrong{' '}
        <span aria-label="An poop emoji" role="img">
          💩
        </span>
      </div>
    );
  }
  if (dataImages) {
    return <ImagesFound dataImages={dataImages} />;
  }
  return null;
}

SearhResult.propTypes = {
  error: PropTypes.bool,
  dataImages: PropTypes.arrayOf(PropTypes.object),
};

export default SearhResult;
