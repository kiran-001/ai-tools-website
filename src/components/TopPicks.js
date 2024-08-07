// import React from 'react';
// import ToolTile from './ToolTile';

// const TopPicks = ({ tools }) => (
//   <div className="top-picks">
//     <h2>Top Picks</h2>
//     <div className="top-picks-scroll">
//       {tools.slice(0, 5).map((tool, index) => (
//         <ToolTile key={index} tool={tool} />
//       ))}
//     </div>
//   </div>
// );

// export default TopPicks;


// import React, { useState, useEffect } from 'react';
// import ToolTile from './ToolTile';

// const TopPicks = ({ tools }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const topPicks = tools.slice(0, 5); // Assuming top picks are the first 5 tools

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % topPicks.length);
//     }, 5000); // Change tool every 5 seconds

//     return () => clearInterval(timer); // Cleanup timer on component unmount
//   }, [topPicks.length]);

//   return (
//     <div className="top-picks-section">
//       <h2>Top Picks</h2>
//       <div className="top-picks-container">
//         {topPicks.map((tool, index) => (
//           <ToolTile key={index} tool={tool} isActive={index === currentIndex} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopPicks;

import React, { useState, useEffect } from 'react';

const TopPicks = ({ tools }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const topPicks = tools.slice(0, 5); // Assuming top picks are the first 5 tools

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topPicks.length);
    }, 5000); // Change tool every 5 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [topPicks.length]);

  return (
    <div className="top-picks-section">
      <h2>Top Picks</h2>
      <div className="top-picks-container">
        {topPicks.map((tool, index) => (
          <div
            key={index}
            className={`top-picks-tool-card ${index === currentIndex ? 'top-picks-tool-card-active' : ''}`}
          >
            <a href={tool['Tool Directory URL']} target="_blank" rel="noopener noreferrer">
              <img src={tool['Tile URL']} alt={tool['Tool Name']} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
