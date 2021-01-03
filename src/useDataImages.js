import * as React from 'react';

import api from './api/api';

function useDataImages(query) {
  const [dataImages, setDataImages] = React.useState(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (query !== null) {
      const getImages = async (query) => {
        const {
          data: { results },
          error,
        } = await api(query);
        error ? setError(error) : setDataImages(results);
      };
      getImages(query);
    }
  }, [query]);

  return [dataImages, error];
}

export default useDataImages;
