import React, { useState, useEffect } from "react";

const Clicker = () => {
  const [number, setNumber] = useState(0);
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!click) {
      return;
    }
    let countHandler = setCount(() => {
      setCount((count) => {
        if (count <= 1) {
          setClick(false);
          return 0;
        }
        return count + 1;
      });
    });

    return () => {
      clearInterval(countHandler);
    };
  }, [click]);

  const onAdd = () => {
    setClick(true);
    setNumber(number + 1);
  };
  const onReset = () => {
    setClick(false);
    setNumber(0);
  };
  return (
    <div>
      <span>{number}</span>

      <button onClick={onAdd}>Add</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Clicker;
