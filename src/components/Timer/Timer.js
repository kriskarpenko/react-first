import React, { useEffect, useState } from "react";

function formatTime(time) {
  const seconds = String(time % 60).padStart(2, "0");
  const minutes = String(Math.trunc(time / 60)).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }
    let intervalHandler = setInterval(() => {
      setTime((oldValue) => oldValue + 1);
    }, [1000]);

    return () => {
      clearInterval(intervalHandler);
    };
  }, [running]);

  const onStartStop = () => {
    setRunning(!running);
  };

  function onReset() {
    setRunning(false);
    setTime(0);
  }

  return (
    <div>
      <span>{formatTime(time)}</span>
      <button onClick={onStartStop}>{running ? "Stop" : "Start"}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Timer;
