// import React, { useState } from 'react';

// const FilterPanel = ({ setFilteredTools, tools, categories }) => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedTags, setSelectedTags] = useState([]);
//   const [selectedPricing, setSelectedPricing] = useState('');

//   const handleFilter = () => {
//     let filtered = tools;
//     if (selectedCategory) {
//       filtered = filtered.filter(tool => tool.Category === selectedCategory);
//     }
//     if (selectedTags.length > 0) {
//       filtered = filtered.filter(tool => selectedTags.some(tag => tool.Tags.includes(tag)));
//     }
//     if (selectedPricing) {
//       filtered = filtered.filter(tool => tool.Price === selectedPricing);
//     }
//     setFilteredTools(filtered);
//   };

//   return (
//     <div className="filters">
//       <div className="filter">
//         <label htmlFor="categories">Categories</label>
//         <select id="categories" onChange={e => setSelectedCategory(e.target.value)}>
//           <option value="">All</option>
//           {categories.map(category => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="filter">
//         <label htmlFor="sort">Sort</label>
//         <select id="sort" onChange={e => console.log(e.target.value)}>
//           <option value="default">Default</option>
//           <option value="date">By Date</option>
//           <option value="name">By Name (A-Z)</option>
//           <option value="likes">Most Liked</option>
//         </select>
//       </div>
//       <div className="filter">
//         <label htmlFor="pricing">Pricing</label>
//         <select id="pricing" onChange={e => setSelectedPricing(e.target.value)}>
//           <option value="">All</option>
//           <option value="Free">Free</option>
//           <option value="Freemium">Freemium</option>
//           <option value="Paid">Paid</option>
//         </select>
//       </div>
//       <button onClick={handleFilter}>Apply Filters</button>
//     </div>
//   );
// };

// export default FilterPanel;

import React, { useState } from 'react';

const filterTools = (tools, { selectedCategory, selectedTags, selectedPricing }) => {
  let filtered = tools;
  if (selectedCategory) {
    filtered = filtered.filter(tool => tool.Category === selectedCategory);
  }
  if (selectedTags.length > 0) {
    filtered = filtered.filter(tool => selectedTags.some(tag => tool.Tags.includes(tag)));
  }
  if (selectedPricing) {
    filtered = filtered.filter(tool => tool.Price === selectedPricing);
  }
  return filtered;
};

const FilterPanel = ({ setFilteredTools, tools, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedPricing, setSelectedPricing] = useState('');

  const handleFilter = () => {
    const filtered = filterTools(tools, { selectedCategory, selectedTags, selectedPricing });
    setFilteredTools(filtered);
  };

  return (
    <div className="filters">
      <div className="filter">
        <label htmlFor="categories">Categories</label>
        <select id="categories" onChange={e => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="sort">Sort</label>
        <select id="sort" onChange={e => console.log(e.target.value)}>
          <option value="default">Default</option>
          <option value="date">By Date</option>
          <option value="name">By Name (A-Z)</option>
          <option value="likes">Most Liked</option>
        </select>
      </div>
      <div className="filter">
        <label htmlFor="pricing">Pricing</label>
        <select id="pricing" onChange={e => setSelectedPricing(e.target.value)}>
          <option value="">All</option>
          <option value="Free">Free</option>
          <option value="Freemium">Freemium</option>
          <option value="Paid">Paid</option>
        </select>
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterPanel;
