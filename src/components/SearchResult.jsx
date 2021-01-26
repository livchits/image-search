import * as React from 'react';
import PropTypes from 'prop-types';

import ImagesFound from './ImagesFound';
import Alert from './Alert';

function SearhResult({ status, dataImages }) {
  if (status === 'rejected') {
    return (
      <div className="w-10/12 mx-auto">
        <Alert type="error">
          Sorry, something went wrong{' '}
          <span aria-label="An poop emoji" role="img">
            💩
          </span>
        </Alert>
      </div>
    );
  }
  if (status === 'pending') {
    return (
      <div className="w-10/12 mx-auto">
        <Alert>
          We are searching...{' '}
          <span aria-label="An emoji of a face with a monocle" role="img">
            🧐
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
  status: PropTypes.string.isRequired,
  dataImages: PropTypes.arrayOf(PropTypes.object),
};

export default SearhResult;
