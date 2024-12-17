import React, { useEffect, useState } from 'react';
import './Loader.css';  // Import the CSS file for styling

const Loader = () => {
  const [progress, setProgress] = useState(0);

  // Simulate loading by updating the progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 25);  // Progress increases every 25ms for a smoother effect

    return () => clearInterval(interval);  // Clean up interval on component unmount
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-background">
        <div className="progress-bar-background">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
