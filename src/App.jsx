import * as React from 'react';

import useDataImages from './useDataImages';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

function App() {
  const [query, setQuery] = React.useState(null);
  const [dataImages, error] = useDataImages(query);

  return (
    <main className="min-h-screen bg-gradient-to-t from-indigo-200 to-indigo-50">
      <SearchForm setQuery={setQuery} />
      <SearchResult dataImages={dataImages} error={error} />
    </main>
  );
}

export default App;
