import React from "react";

const CountDownComplete = ({ onButtonClick }) => {
  return (
    <div>
      <span>Ended</span>
      <button onClick={onButtonClick}>Reset</button>
    </div>
  );
};

export default CountDownComplete;
