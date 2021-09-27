import React, { useState, useEffect } from 'react';
import wiki from '../images/wiki.svg';
import { infoBtn } from '../infoBtn';
import InfoButtons from './InfoButtons';

const Info = ({ planets, resetInfoBtn }) => {
  const [isActiveBtn, setActiveBtn] = useState(resetInfoBtn);
  const [currentBtn, setCurrentBtn] = useState(infoBtn[0].data);
  useEffect(() => {
    function handleResetBtn() {
      if (isActiveBtn !== resetInfoBtn) {
        setActiveBtn(0);
        setCurrentBtn(infoBtn[0].data);
      }
    }
    handleResetBtn();
  }, [planets]);

  function onClickBtnItem(index, btn) {
    setActiveBtn(index);
    setCurrentBtn(btn);
  }

  return (
    <div className="info-container">
      <div className="info-box">
        <div className="planet-name">{planets.name}</div>
        <div className="planet-content">{planets[currentBtn].content}</div>
        <div className="planet-source">
          <span className="source-blurb">Source : </span>
          <a href={planets[currentBtn].source} target="_blank" rel="noreferrer">
            Wikipedia <img src={wiki} alt="wiki" />
          </a>
        </div>
      </div>
      {currentBtn === 'geology' ? (
        <>
          <div className="planet-image">
            <img src={planets.images.overview} alt="" />
          </div>
          <div className="geology-image">
            <img className="geo" src={planets.images.geology} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="planet-image">
            <img src={planets.images[currentBtn]} alt="" />
          </div>
        </>
      )}

      <div className="buttons">
        {infoBtn.map((btn, index) => {
          let data = btn.data;
          return (
            <InfoButtons
              key={index}
              className={`info-btn ${data} ${
                isActiveBtn === index ? 'active' : 'inactive'
              }`}
              value={data}
              textMobile={btn.mobile}
              textBrowser={btn.text}
              number={btn.id}
              onClick={() => onClickBtnItem(index, data)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Info;

/*
<button
          onClick={props.onClick}
          className="info-btn overview"
          value="overview"
        >
          <span className="btn-num">01</span> Overview
        </button>
        <button
          onClick={props.onClick}
          className="info-btn structure"
          value="structure"
        >
          <span className="btn-num">02</span> Structure
        </button>
        <button
          onClick={props.onClick}
          className="info-btn geology"
          value="geology"
        >
          <span className="btn-num">03</span> Geology
        </button>

        <div className="planet-image">
        <img src={planets.images.overview} alt="" />
      </div>
      <div className="geology-image">
        <img className="geo" src={planets.images.geology} alt="" />
      </div>
*/
