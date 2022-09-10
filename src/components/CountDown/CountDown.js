import { useState, useEffect, useCallback } from "react";
import CountDownComplete from "./Complete";
import CountDownDisplay from "./Display";
import CountDownInput from "./Input";

const CountDown = ({ initialValue = 1 }) => {
  const [timeRemaining, setTimeRemaining] = useState(1);
  const [value, setValue] = useState(initialValue);
  const [running, setRunning] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }
    let intervalHandler = setInterval(() => {
      setTimeRemaining((oldValue) => {
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

  const onStart = useCallback(() => {
    setTimeRemaining(value);
    setRunning(true);
    setComplete(false);
  }, [value]);

  const onStop = useCallback(() => {
    setTimeRemaining(0);
    setRunning(false);
    setComplete(false);
  }, []);

  const onReset = useCallback(() => {
    setComplete(false);
  }, []);

  const onInputChange = useCallback((event) => {
    setValue(Number(event.target.value));
  }, []);

  return (
    <div>
      {complete ? (
        <CountDownComplete onButtonClick={onReset} />
      ) : running ? (
        <CountDownDisplay value={timeRemaining} onButtonClick={onStop} />
      ) : (
        <CountDownInput
          value={value}
          onButtonClick={onStart}
          onValueChange={onInputChange}
        />
      )}
    </div>
  );
};

export default CountDown;
