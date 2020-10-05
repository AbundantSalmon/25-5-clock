import React from 'react';
import './Display.css';

type DisplayProps = {
  label: string;
  currentTime: string;
};

export const Display: React.VFC<DisplayProps> = ({ label, currentTime }) => {
  return (
    <div id="display-container" className="card my-3">
      <div id="timer-label">
        <h1>{label}</h1>
      </div>
      <div id="time-left">{currentTime}</div>
    </div>
  );
};
