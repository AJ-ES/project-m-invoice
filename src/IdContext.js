import React, { createContext, useContext, useState } from "react";

const IdContext = createContext();

export const IdProvider = ({ children }) => {
  const [id, setId] = useState("");

  return (
    <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>
  );
};

export const useId = () => useContext(IdContext);
