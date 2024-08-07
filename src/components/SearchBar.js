// import React, { useState } from 'react';

// const SearchBar = ({ setFilteredTools, tools }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     const filtered = tools.filter(tool =>
//       tool['Tool Name'].toLowerCase().includes(query.toLowerCase()) ||
//       tool.Description.toLowerCase().includes(query.toLowerCase()) ||
//       tool.Tags.toLowerCase().includes(query.toLowerCase())
//     );
//     console.log("searching");
//     setFilteredTools(filtered);
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         placeholder="Search for AI tools..."
//       />
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState, useCallback } from 'react';

const debounceFunction = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const SearchBar = ({ setFilteredTools, tools }) => {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback(() => {
    const filtered = tools.filter(tool =>
      tool['Tool Name'].toLowerCase().includes(query.toLowerCase()) ||
      tool.Description.toLowerCase().includes(query.toLowerCase()) ||
      tool.Tags.toLowerCase().includes(query.toLowerCase())
    );
    console.log('Filtered Tools:', filtered);
    setFilteredTools(filtered);
  }, [query, tools, setFilteredTools]);

  const debouncedSearch = useCallback(debounceFunction(handleSearch, 300), [handleSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for AI tools..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
