import React from 'react';
import MediaQuery from 'react-responsive';

const InfoButtons = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      value={props.value}
    >
      <span className="btn-num">0{props.number}</span>
      <MediaQuery maxWidth={740}>{props.textMobile}</MediaQuery>
      <MediaQuery minWidth={740}>{props.textBrowser}</MediaQuery>
    </button>
  );
};

export default InfoButtons;
