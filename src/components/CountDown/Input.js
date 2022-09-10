import React from "react";

const CountDownInput = ({ value, onButtonClick, onValueChange }) => {
  return (
    <div>
      <input type="number" min="1" value={value} onChange={onValueChange} />
      <button onClick={onButtonClick}>Start</button>
    </div>
  );
};

export default CountDownInput;
