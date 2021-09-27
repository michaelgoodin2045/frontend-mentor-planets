import React from 'react';
import arrow from '../images/arrow.svg';
import MediaQuery from 'react-responsive';

const NavLinks = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      value={props.value}
    >
      <MediaQuery maxWidth={740}>
        <span className={props.spanClassName}></span>
      </MediaQuery>
      {props.name}
      <MediaQuery maxWidth={740}>
        <span className="arrow">
          <img src={arrow} alt="arrow" />
        </span>
      </MediaQuery>
    </button>
  );
};

export default NavLinks;
