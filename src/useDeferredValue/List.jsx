import React, { useMemo, useDeferredValue, useEffect } from "react";

const List = ({ input }) => {
  const LIST_SIZE = 20000;

  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}> {deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  //useEffect to show differences between state and deferredValue
  useEffect(() => {
    console.log(`Input: ${input}\n Deferred: ${deferredInput}`);
  });

  return list;
};

export default List;
