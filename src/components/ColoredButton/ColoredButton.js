import { useState } from "react";

const ColoredButton = (props) => {
  const { initialColor, children, disabled } = props;
  const [color, setColor] = useState(initialColor);

  const onClick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <button
      disabled={disabled}
      children={children}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};

export default ColoredButton;
