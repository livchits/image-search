import * as React from 'react';
import PropTypes from 'prop-types';

import ImagesFound from './ImagesFound';

function SearhResult({ error, dataImages }) {
  if (error) {
    return (
      <div>
        Sorry, something went wrong
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
