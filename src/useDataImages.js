import * as React from 'react';

import api from './api/api';

function useDataImages(query) {
  const [{ status, data }, setState] = React.useState({
    status: 'idle',
    data: null,
  });

  React.useEffect(() => {
    const getImages = async (query) => {
      setState((state) => ({ ...state, status: 'pending' }));
      const { data, error } = await api(query);
      error
        ? setState((state) => ({ ...state, status: 'rejected' }))
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
  }, [query]);

  return [status, data];
}

export default useDataImages;
