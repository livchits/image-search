import * as React from 'react';

import api from './api/api';

function useDataImages(query) {
  const [dataImages, setDataImages] = React.useState(null);

  React.useEffect(() => {
    const getImages = async (query) => {
      const results = await api(query);
      setDataImages(results);
    };
    getImages(query);
  }, [query]);

  return [dataImages];
}

export default useDataImages;
