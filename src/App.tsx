import * as React from 'react';

import useDataImages from './useDataImages';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import Footer from './Footer';

function App() {
  const [query, setQuery] = React.useState<string | null>(null);
  const { status, dataImages } = useDataImages(query);

  return (
    <>
      <main className="flex-grow">
        <SearchForm setQuery={setQuery} />
        <SearchResult dataImages={dataImages} status={status} />
      </main>
      <Footer />
    </>
  );
}

export default App;
