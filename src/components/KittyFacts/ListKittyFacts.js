import React, { useState, useCallback, useEffect } from "react";

async function getCatFactList(page = 1, limit = 5) {
  const res = await fetch(
    `https://catfact.ninja/facts?limit=${limit}&page=${page}`
  );
  const data = await res.json();

  return { list: data.data, pageCount: data.last_page };
}

const ListKittyFacts = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const getData = useCallback(async () => {
    const data = await getCatFactList(page);
    setList(data.list);
    setPageCount(data.pageCount);
  }, [page]);

  useEffect(() => {
    getData();
  }, [getData]);

  const onPrevClick = useCallback(() => {
    setPage((prevValue) => Math.max(prevValue - 1, 1));
  }, []);

  const onNextClick = useCallback(() => {
    setPage((prevValue) => Math.max(prevValue + 1, 1));
  }, []);

  return (
    <div>
      <h2>Funny facts about cats</h2>
      <div>Page:{page}</div>
      <ul>
        {list.map(({ fact }) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <div>
        <button onClick={onPrevClick} disabled={page < 2}>
          Prev
        </button>
        <button onClick={onNextClick} disabled={page >= pageCount}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ListKittyFacts;
