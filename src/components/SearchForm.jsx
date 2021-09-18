import * as React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ setQuery }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.search;
    setQuery(value);
  };

  return (
    <form
      className="w-screen max-w-screen-md p-6 m-auto mt-8 tracking-tight text-center sm:w-9/12"
      onSubmit={handleSubmit}
    >
      <label
        className="font-mono text-2xl leading-none text-gray-800"
        htmlFor="search"
      >
        Search images of...
        <span aria-label="A magnifying glass" className="mx-2" role="img">
          🔍
        </span>
      </label>
      <input
        className="w-full font-mono text-xl text-gray-700 border-2 border-gray-500 rounded-md shadow-sm mt-7 focus:border-blue-500 focus:border-4 focus:ring-inset"
        id="search"
        name="search"
        type="text"
        autoFocus
      />
    </form>
  );
}

SearchForm.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default SearchForm;
