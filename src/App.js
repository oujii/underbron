import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useDeferredValue } from 'react';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbyPlstT4U_fwZwY1AT5seSq6OI3-NpmebHFm6x8bFcW20URDWQtaE23Sqr4PJzgo3TisA/exec");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data ? (
          <div>
            <h1>Data Loaded</h1>
            <div className="producers">
              {data.data.map((item, index) => 
                item.producer ? <div key={index} className="producer">{item.producer}</div> : null
              )}
            </div>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;