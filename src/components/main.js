import React, { useState, useEffect, useContext } from "react";
import Burgers from "./burgers";
import OrderProduct from "./order-product/order-product";

import toppingListData from '../data/toppingsList.json';
import { StoreContext } from "../store/storeProvider";
import { types } from '../store/stoteReducer';


const Main = () => {


  const [store, dispatch] = useContext(StoreContext);

  const { step } = store;

  const [items, setItems] = useState([]);


  useEffect(() => {
    if (step === 0) {
      updateData();
    }
  }, [step]);

  /**
   * Calls upon search change
   * @memberof updateInput
   * @param e [Object] - the event from a text change handler
   */
  const updateData = async () => {
    await fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results.slice(0, 4));
      });
  };


  return (
    <>
      {step === 0 ? (
        <Burgers items={items}  ></Burgers>
      ) : (
        <OrderProduct
          onBackButtonClick={() => dispatch({ type: types.updateStep, payload: 0 })}
        ></OrderProduct>
      )}

    </>
  );
};

export default Main