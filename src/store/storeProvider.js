import React, { createContext, useReducer } from "react";
import StoreReducer, { initialStore } from "./stoteReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {

const [store, dispatch] = useReducer(StoreReducer, initialStore)
  return <StoreContext.Provider value={[store, dispatch]}>{children}</StoreContext.Provider>;
};


export { StoreContext }
export default StoreProvider;
