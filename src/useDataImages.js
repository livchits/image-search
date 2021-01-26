import * as React from 'react';

import api from './api/api';

function useDataImages(query) {
  const [dataImages, setDataImages] = React.useState(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const abortController = new AbortController();
    const getImages = async (query) => {
      const { data, error } = await api(query, abortController);
      error ? setError(error) : setDataImages(data);
    };
    if (query !== null) {
      getImages(query);
    }
    return () => {
      abortController.abort();
    };
  }, [query]);

  return [dataImages, error];
}

export default useDataImages;
