import React, { useEffect, useState } from "react";
import { GridLayout } from "./intersectableGrid";
import { makeRandomInt, makeURL } from "./utils";
import { useIsInViewport } from "./viewPortHook";
// hosseinshirjoni@chmail.ir

const startState = () => {
  let list = [];
  for (let i = 0; i < 50; i++) {
    list.push({
      id: i + 1,
      src: makeURL(i + 1),
      shouldFetch: false,
      height: makeRandomInt(),
    });
  }
  return list;
};

function App() {
  const [images, setImagees] = useState(startState);
  const isInViewport = useIsInViewport();
  const changeShowOption = () => {
    let ids = [1, 2, 3, 4, 5];
    const list = images;
    for (let id in ids) {
      list[id] = {
        ...list[id],
        shouldFetch: true,
      };
    }
    setImagees(list);
  };
  useEffect(() => {
    changeShowOption();
  }, []);
  return (
    <div className="App">
      grid layout
      <GridLayout images={images} isInViewport={isInViewport} />
    </div>
  );
}

export default App;
