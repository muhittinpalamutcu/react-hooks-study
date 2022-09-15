import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5)); // we can pass parameters because it's a useCallback function, if its a useMemo we couldn't able to pass parameters because it'll be variable of function result.
    console.log("Updating Items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
