import type { NormalizedImageData } from './types/index';
import * as React from 'react';

import api from './api/api';

interface DataImagesState {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data: NormalizedImageData[] | null | [];
  error: unknown;
}

function useDataImages(query: string) {
  const [{ status, data }, setState] = React.useState<DataImagesState>({
    status: 'idle',
    data: null,
    error: null,
  });

  React.useEffect(() => {
    const abortController = new AbortController();
    const getImages = async (query: string) => {
      setState((state) => ({ ...state, status: 'pending' }));
      const { data, error } = await api(query, abortController);
      error
        ? setState((state) => ({ ...state, status: 'rejected', error }))
        : setTimeout(() => {
            setState((state) => ({
              ...state,
              status: 'resolved',
              data,
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

  return [status, data];
}

export default useDataImages;
