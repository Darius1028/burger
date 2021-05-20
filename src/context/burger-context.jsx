import React, { createContext, useState } from "react";

const BurgerContext = createContext();

const initialList = { id: null, list: [] };

const BurgerProvider = ({ children }) => {
  const [listBurger, setListBurger] = useState(initialList);
  const [item, setItem] = useState(0);

  const checkId = (id) => {
    console.log(id + " uno" );
    setItem(id ) ;
  };

  const data = { item: item, listBurger: listBurger, checkId: checkId };

  return (
    <BurgerContext.Provider value={data}>{children}</BurgerContext.Provider>
  );
};

export { BurgerProvider };

export default BurgerContext;
