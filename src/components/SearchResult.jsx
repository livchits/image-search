import * as React from 'react';
import PropTypes from 'prop-types';

import ImagesFound from './ImagesFound';
import Alert from './Alert';

function SearhResult({ error, dataImages }) {
  if (error) {
    return (
      <div className="w-10/12 mx-auto">
        <Alert type="error">
          Sorry, something went wrong{' '}
          <span aria-label="A poop emoji" role="img">
            💩
          </span>
        </Alert>
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
