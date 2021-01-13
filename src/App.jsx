import * as React from 'react';

import ImagesFound from './components/ImagesFound';
import SearchForm from './components/SearchForm';
import useDataImages from './useDataImages';

function App() {
  const [query, setQuery] = React.useState(null);
  const [dataImages, error] = useDataImages(query);

  return (
    <main className="min-h-screen bg-gradient-to-t from-indigo-200 to-indigo-50 bg-">
      <SearchForm setQuery={setQuery} />

      {error ? (
        <div>
          Sorry, something went wrong
          <span aria-label="An poop emoji" role="img">
            💩
          </span>
        </div>
      ) : (
        dataImages && <ImagesFound dataImages={dataImages} />
      )}
    </main>
  );
}

export default App;
