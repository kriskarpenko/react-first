import React, { useCallback, useEffect, useState } from "react";
import { formatTime } from "../../utils/time";

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

  const onStartStop = useCallback(() => {
    // setRunning(!running);
    setRunning((oldValue) => !oldValue);
  }, []);

  const onReset = useCallback(() => {
    setRunning(false);
    setTime(0);
  }, []);

  return (
    <div>
      <span>{formatTime(time)}</span>
      <button onClick={onStartStop}>{running ? "Stop" : "Start"}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Timer;
