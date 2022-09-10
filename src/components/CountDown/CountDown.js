import { useState, useEffect } from "react";
import CountDownComplete from "./Complete";
import CountDownDisplay from "./Display";
import CountDownInput from "./Input";

const CountDown = ({ initialValue = 1 }) => {
  const [time, setTime] = useState(1);
  const [length, setLength] = useState(initialValue);
  const [running, setRunning] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }
    let intervalHandler = setInterval(() => {
      setTime((oldValue) => {
        if (oldValue <= 1) {
          setRunning(false);
          setComplete(true);
          return 0;
        }
        return oldValue - 1;
      });
    }, [1000]);

    return () => {
      clearInterval(intervalHandler);
    };
  }, [running]);

  const onStart = () => {
    setTime(length);
    setRunning(true);
    setComplete(false);
  };

  const onStop = () => {
    setTime(0);
    setRunning(false);
    setComplete(false);
  };

  const onReset = () => {
    setComplete(false);
  };

  function onInputChange(event) {
    setLength(Number(event.target.value));
  }

  return (
    <div>
      {complete ? (
        <CountDownComplete onButtonClick={onReset} />
      ) : running ? (
        <CountDownDisplay value={time} onButtonClick={onStop} />
      ) : (
        <CountDownInput
          value={length}
          onButtonClick={onStart}
          onValueChange={onInputChange}
        />
      )}
    </div>
  );
};

export default CountDown;
