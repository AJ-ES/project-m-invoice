// Importing necessary hooks and functions from React
import React, { createContext, useContext, useState } from "react";

// Creating a context for ID management
const IdContext = createContext();

// Provider component for the IdContext, allowing child components to access and modify the ID state
export const IdProvider = ({ children }) => {
 // State hook to manage the ID value, initialized as an empty string
 const [id, setId] = useState("");

 // Returning the IdContext.Provider component, passing the current ID and the setId function as its value
 // This allows child components to access and modify the ID state through the context
 return (
    <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>
 );
};

// Custom hook to consume the IdContext, providing a convenient way for components to access the ID state and its setter function
export const useId = () => useContext(IdContext);
