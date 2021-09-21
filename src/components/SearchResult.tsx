import * as React from 'react';

import ImagesFound from './ImagesFound';
import Alert from './Alert';
import type { DataImagesState } from 'src/types';

interface SearchResultProps {
  dataImages: DataImagesState['dataImages'];
  status: DataImagesState['status'];
}

function SearhResult({ status, dataImages }: SearchResultProps) {
  if (status === 'rejected') {
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

export default SearhResult;
