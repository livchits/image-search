import * as React from 'react';

import api from './api/api';

function useDataImages(query) {
  const [dataImages, setDataImages] = React.useState(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const getImages = async (query) => {
      const {
        data: { results },
        error,
      } = await api(query);
      error ? setError(error) : setDataImages(results);
    };
    if (query !== null) {
      getImages(query);
    }
  }, [query]);

  return [dataImages, error];
}

export default useDataImages;
