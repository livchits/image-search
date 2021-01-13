import * as React from 'react';

import ImagesFound from './components/ImagesFound';
import SearchForm from './components/SearchForm';
import useDataImages from './useDataImages';

function App() {
  const [query, setQuery] = React.useState(null);
  const [dataImages, error] = useDataImages(query);

  return (
    <main className="min-h-screen bg-gradient-to-t from-yellow-700 to-yellow-100">
      <SearchForm setQuery={setQuery} />
      <div>
        {/*  {error ? (
          <div>Ups... Algo salió mal</div>
        ) : (
          <ImagesFound dataImages={dataImages} />
        )} */}
        {dataImages && <ImagesFound dataImages={dataImages} />}
      </div>
    </main>
  );
}

export default App;
