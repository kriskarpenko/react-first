import React, { useCallback, useEffect } from "react";
import { useState } from "react";

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

const Dogs = () => {
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(true);

  const getDogs = useCallback(async () => {
    setLoading(true);
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    await delay(333);
    setPic(data.message);
    setLoading(false);
  }, []);

  useEffect(() => {
    getDogs();
  }, [getDogs]);

  const onClick = useCallback(() => {
    getDogs();
  }, [getDogs]);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px lightblue dotted",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "256px",
        width: "1px",
        margin: "10px auto",
        gap: "10px",
      }}
    >
      {loading ? <span>Loading...</span> : <img src={pic} width={256} alt="" />}
      <button disabled={loading} onClick={onClick}>
        Cute dogs here
      </button>
    </div>
  );
};

export default Dogs;
