import React, { useContext, useState } from "react";

const NumberContext = React.createContext();

export const useNumber = () => {
  return useContext(NumberContext);
};

export const NumberProvider = ({ children }) => {
  const [exNumber, setExNumber] = useState(0);

  const incrementNumber = () => {
    setExNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <NumberContext.Provider value={{ exNumber, incrementNumber }}>
      {children}
    </NumberContext.Provider>
  );
};
