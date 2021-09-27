import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Stats from './components/Stats';
import data from './data.json';
import './styles.css';

function App() {
  // setState for the planets
  const [planets, setPlanets] = useState(data[0]);
  const [activeClass, setActiveClass] = useState(data[0].name.toLowerCase());
  const [resetInfoBtn, setResetInfoBtn] = useState(0);

  useEffect(() => {
    setResetInfoBtn(0);
  }, [planets, resetInfoBtn]);

  useEffect(() => {
    function handleActiveClass() {
      document.body.removeAttribute('class');
      document.body.classList.toggle(activeClass);
    }
    handleActiveClass();
  });

  // Function to change the planet view
  const changePlanet = (index, name) => {
    setPlanets(data[index]);
    setActiveClass(name.toLowerCase());
  };

  /*const changePlanet = (e) => {
    let planet = e.target.value;
    data.forEach((el) => {
      if (el.name === planet) {
        setPlanets({
          name: el.name,
          content: el.overview.content,
          image: el.images.planet,
          source: el.overview.source,
          rotation: el.rotation,
          revolution: el.revolution,
          radius: el.radius,
          temperature: el.temperature,
          geology: el.images.geology,
          display: 'none',
        });
      }
    });
  };
*/
  //Change Information View
  /*const changeView = (e) => {
    let infoType = e.target.value;
    let imageType = e.target.value;
    let display = 'none';
    if (imageType === 'overview') {
      imageType = 'planet';
    } else if (imageType === 'structure') {
      imageType = 'internal';
    } else if (imageType === 'geology') {
      imageType = 'planet';
      display = 'block';
    }
    data.forEach((el) => {
      if (el.name === planets.name) {
        setPlanets({
          ...planets,
          content: el[infoType].content,
          source: el[infoType].source,
          image: el.images[imageType],
          display: display,
        });
      }
    });
  };
*/
  return (
    <div className="container">
      <Header changePlanet={changePlanet} data={data} />
      <Info planets={planets} resetInfoBtn={resetInfoBtn} />
      <Stats planets={planets} />
    </div>
  );
}

export default App;
/*
 display={display}
        
        name={name}
        content={content}
        image={image}
        imageGeo={geology}
        source={source}
        reset={resetInfoBtn}

         rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
*/
