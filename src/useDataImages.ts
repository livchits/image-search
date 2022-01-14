import * as React from 'react';

import type { DataImagesState } from './types/index';
import api from './api/api';

function useDataImages(query: string | null) {
  const [{ status, dataImages }, setState] = React.useState<DataImagesState>({
    status: 'idle',
    dataImages: null,
    error: null,
  });

  React.useEffect(() => {
    const abortController = new AbortController();
    const getImages = async (query: string) => {
      setState((state) => ({ ...state, status: 'pending' }));
      const { data: dataImages, error } = await api(query, abortController);
      error
        ? setState((state) => ({ ...state, status: 'rejected', error }))
        : setTimeout(() => {
            setState((state) => ({
              ...state,
              status: 'resolved',
              dataImages,
            }));
          }, 750);
    };
    if (query !== null) {
      getImages(query);
    }
    return () => {
      abortController.abort();
    };
  }, [query]);

  return { status, dataImages };
}

export default useDataImages;
