import { useCallback, useEffect, useState } from "react";

async function getCatFact() {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();

  return data.fact;
}
/**
 * Renders single kitty facts from api
 */
const SingleKittyFact = () => {
  const [fact, setFact] = useState("Loading...");

  const getData = useCallback(async () => {
    const newFact = await getCatFact();
    setFact(newFact);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const onClick = useCallback(async () => {
    getData();
  }, [getData]);

  return (
    <div>
      <div>{fact}</div>
      <button onClick={onClick}>A fact about cats</button>
    </div>
  );
};

export default SingleKittyFact;
