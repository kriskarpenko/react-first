import React from "react";
import { formatTime } from "../../utils/time";

const CountDownDisplay = ({ value, onButtonClick }) => {
  return (
    <div>
      <span>{formatTime(value)}</span>
      <button onClick={onButtonClick}>Stop</button>
    </div>
  );
};

export default CountDownDisplay;
