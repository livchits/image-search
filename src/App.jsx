import * as React from 'react';

import SearchForm from './components/SearchForm';
import useDataImages from './useDataImages';

function App() {
  const [query, setQuery] = React.useState(null);
  const [dataImages] = useDataImages(query);

  return (
    <main className="min-h-screen bg-gradient-to-t from-yellow-700 to-yellow-100">
      <SearchForm setQuery={setQuery} />
      <div>
        {dataImages &&
          dataImages.map(({ id, alt_description, urls: { small } }) => (
            <div key={id}>
              <img alt={alt_description} src={small} />
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
