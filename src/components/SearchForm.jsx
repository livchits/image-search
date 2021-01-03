import * as React from 'react';

// import getImages from '../api/api';

function SearchForm({ setQuery }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.search;
    setQuery(value);
  };

  return (
    <form
      className="w-screen max-w-screen-md p-8 m-auto text-center sm:w-9/12"
      onSubmit={handleSubmit}
    >
      <label
        className="font-mono text-2xl leading-none text-gray-800"
        htmlFor="search"
      >
        Search an image{' '}
        <span aria-label="A magnifying glass" role="img">
          🔍
        </span>
      </label>
      <input
        className="w-full mt-4 font-mono text-xl text-gray-700 border-2 border-gray-500 rounded-md shadow-sm focus:border-blue-500 focus:border-4 focus:ring-inset"
        id="search"
        name="search"
        type="text"
      />
    </form>
  );
}

export default SearchForm;
