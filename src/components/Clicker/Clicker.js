import { useCallback, useState } from "react";

const Clicker = () => {
  const [number, setNumber] = useState(0);

  const onAdd = useCallback(() => {
    // setNumber(number + 1);
    setNumber((oldValue) => oldValue + 1);
  }, []);

  const onReset = useCallback(() => {
    setNumber(0);
  }, []);

  return (
    <div>
      <span>{number}</span>

      <button onClick={onAdd}>Add</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Clicker;
