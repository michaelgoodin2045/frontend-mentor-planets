import React from 'react';
import { useState } from 'react';
import Hamburger from './Hamburger';
import NavLinks from './NavLinks';
import MediaQuery from 'react-responsive';

const Header = ({ changePlanet, data }) => {
  const [activePlanet, setActivePlanet] = useState('mercury');
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const handleNewPlanet = (index, planetName) => {
    changePlanet(index, planetName);
    setActivePlanet(planetName.toLowerCase());
  };

  return (
    <div className="navbar">
      <div className="nav-top">
        <div className="logo">The Planets</div>
        <MediaQuery maxWidth={740}>
          <div
            className={`hamburger ${navbarOpen ? ' hamburger-open' : ''}`}
            onClick={handleToggle}
          >
            <Hamburger />
          </div>
        </MediaQuery>
      </div>

      <div
        className={`nav-links ${navbarOpen ? ' show-menu' : ''}`}
        onClick={closeMenu}
      >
        {data.map((planet, index) => {
          let name = planet.name.toLowerCase();
          return (
            <NavLinks
              key={index}
              className={`planet-btn ${name} ${
                activePlanet === name.toLowerCase() ? 'active' : 'inactive'
              }`}
              onClick={() => handleNewPlanet(index, name)}
              value={name}
              name={name}
              spanClassName={`circle bg-${name}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;

/*
<button onClick={props.onClick} className="planet-btn" value="Mercury">
          <span className="circle bg-mercury"></span>mercury
          <span className="arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
        <button onClick={props.onClick} className="planet-btn" value="Venus">
          <span className="circle bg-venus"></span>venus
          <span className="arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
        <button onClick={props.onClick} className="planet-btn" value="Earth">
          <span className="circle bg-earth"></span>Earth
          <span className="arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
        <button onClick={props.onClick} className="planet-btn" value="Mars">
          <span className="circle bg-mars"></span>mars
          <span className="arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
        <button onClick={props.onClick} className="planet-btn" value="Jupiter">
          <span className="circle bg-jupiter"></span>jupiter
          <span className="arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
        <button onClick={props.onClick} className="planet-btn" value="Saturn">
          <span className="circle bg-saturn"></span>saturn
          <span className="arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
        <button onClick={props.onClick} className="planet-btn" value="Uranus">
          <span className="circle bg-uranus"></span>uranus
          <span className="arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
        <button onClick={props.onClick} className="planet-btn" value="Neptune">
          <span className="circle bg-neptune"></span>neptune
          <span className="arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </button>
*/
