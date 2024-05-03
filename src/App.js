import logo from './geist_logo.mp4';
import stencil from './stencil.png';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbzZVxfujSYR7sF0Ord3QRyhpZ4tvs7fcTVJoyWkLzUkL1SJe51vY1__1SakB50bTCGyyA/exec");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  // Variables to track whether each category title has been rendered
  let highlightRendered = false;
  let petNatRendered = false;
  let vittRendered = false;
  let rottRendered = false;
  let orangeRendered = false;
  let geistRendered = false;
  let ovrigtRendered = false;
  let snacksRendered = false;
  let fpetnatRendered = false;
  let fvittRendered = false;
  let frottRendered = false;
  let forangeRendered = false;


  return (
    <div className="App">
      <header className="App-header">
         <video src={logo} className="App-logo" alt="logo" autoPlay loop /> 
        {data ? (
          <div>
            <div className="wrapper">
              {data.data.map((item, index) => (
                <div key={index}>
                  {/* Render category title if not rendered yet */}
                  {!highlightRendered && item.category === 'Highlight' && (
                    <>
                      <div className="category_title"></div>
                      {highlightRendered = true} {/* Update local variable */}
                    </>
                  )}

                  {!petNatRendered && item.category === 'Pét Nat' && (
                    <>
                      <div className="category_title">Pét Nat</div>
                      {petNatRendered = true} {/* Update local variable */}
                    </>
                  )}

                  {!vittRendered && item.category === 'Vitt' && (
                    <>
                      <div className="category_title">Vitt</div>
                      {vittRendered = true} {/* Update local variable */}
                    </>
                  )}
                    {!rottRendered && item.category === 'Rött' && (
                    <>
                      <div className="category_title">Rött</div>
                      {rottRendered = true} {/* Update local variable */}
                    </>
                  )}
                    {!orangeRendered && item.category === 'Orange' && (
                    <>
                      <div className="category_title">Orange</div>
                      {orangeRendered = true} {/* Update local variable */}
                    </>
                  )}
                    {!geistRendered && item.category === 'Geist of the Night' && (
                    <>
                      <div className="category_title">Geist of the Night</div>
                      {geistRendered = true} {/* Update local variable */}
                    </>
                  )}
                    {!ovrigtRendered && item.category === 'Övrigt' && (
                    <>
                      <div className="category_title">Övrigt</div>
                      {ovrigtRendered = true} {/* Update local variable */}
                    </>
                  )}
                   {!snacksRendered && item.category === 'Snacks' && (
                    <>
                      <div className="category_title">Snacks</div>
                      {snacksRendered = true} {/* Update local variable */}
                    </>
                  )}

                  {/* Render item */}
                  {(item.category === 'Highlight' || item.category === 'Pét Nat' || item.category === 'Vitt' || item.category === 'Rött'  || item.category === 'Orange' || item.category === 'Geist of the Night'  || item.category === 'Övrigt' || item.category === 'Snacks') && (
                    <div className="menykategori">
                      <div className='subcategory'>{item.subcategory} </div>
                      <div className='subcategory_price'>{item.subcategory_price} </div>
                      <div className='info'>{item.year} {item.name} <span className='producer'>{item.producer} <br/>{item.region}</span></div>
                      <div className='price'>{item.price}</div>
                    </div>
                  )}
                </div>
              ))}

              <video src={logo} className="App-logo" alt="logo" autoPlay loop /> 



                


            </div>
          </div>
        ) : (
          <p>Laddar meny...</p>
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
