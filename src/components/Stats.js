import React from 'react';

const Stats = ({ planets }) => {
  return (
    <div className="stats-container">
      <div className="stat-box">
        <div className="stat-name">Rotation Time</div>
        <div className="stat-info">{planets.rotation}</div>
      </div>
      <div className="stat-box">
        <div className="stat-name">Revolution Time</div>
        <div className="stat-info">{planets.revolution}</div>
      </div>
      <div className="stat-box">
        <div className="stat-name">Radius</div>
        <div className="stat-info">{planets.radius}</div>
      </div>
      <div className="stat-box">
        <div className="stat-name">Average Temp.</div>
        <div className="stat-info">{planets.temperature}</div>
      </div>
    </div>
  );
};

export default Stats;
