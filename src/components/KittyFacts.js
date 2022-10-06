import { useEffect, useState } from "react";

async function getCatFact() {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();

  return data.fact;
}

const KittyFacts = () => {
  const [fact, setFact] = useState("Loading...");

  useEffect(() => {
    async function getData() {
      const newFact = await getCatFact();
      setFact(newFact);
    }
    getData();
  }, []);

  const onClick = async () => {
    const newFact = await getCatFact();
    setFact(newFact);
  };

  return (
    <div>
      <div>{fact}</div>
      <button onClick={onClick}>A fact about cats</button>
    </div>
  );
};

export default KittyFacts;
