import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Loader from './components/Loader/Loader';  // Import the loader component
import Anim from './components/Anim/Anim';
import CustomCursor from './components/CustoCursor/CustomCursor';

const App = () => {
  const [loading, setLoading] = useState(false);

  // Simulate data loading or any other task
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  // Hide loader after 3 seconds
    }, 3000);  // You can adjust this timing or replace it with your real loading process
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <Anim />  }
      <CustomCursor/>
    </div>
  );
}

export default App;
