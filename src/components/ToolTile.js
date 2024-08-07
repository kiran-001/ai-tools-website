import React from 'react';

const ToolTile = ({ tool }) => (
  <div className="tool-card">
    <img src={tool['Tile URL']} alt={tool['Tool Name']} />
    <h3>{tool['Tool Name']}</h3>
    {/* <p>{tool.Description}</p> */}
    <a href={tool['Tool Directory URL']} target="_blank" rel="noopener noreferrer">Explore</a>
  </div>
);

export default ToolTile;
