import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import TopPicks from './components/TopPicks';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import ToolTile from './components/ToolTile';
import data from './tools_info.json';
import './App.css';

const App = () => {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setTools(data);
    setFilteredTools(data);
    const uniqueCategories = [...new Set(data.map(tool => tool.Category))];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div>
      {/* <div className="header">
        <h1>AI Tools Directory</h1>
      </div> */}
      <HeroSection />
      <TopPicks tools={tools} />
      <div className="search-container">
        <SearchBar setFilteredTools={setFilteredTools} tools={tools} />
      </div>
      <div className="main-layout">
        <div className="filters-section">
          <FilterPanel setFilteredTools={setFilteredTools} tools={tools} categories={categories} />
        </div>
        <div className="tool-tiles-section">
          {filteredTools.map((tool, index) => (
            <ToolTile key={index} tool={tool} />
          ))}
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 AI Tools Directory. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
