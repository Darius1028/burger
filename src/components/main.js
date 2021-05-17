import React, { useState, useEffect, useRef } from "react";
import Burgers from "./burgers";
import OrderProduct from "./order-product/order-product";

import burgerListData from '../data/burgersList.json';
import toppingListData from '../data/toppingsList.json';

const Main = () => {
    const [items, setList] = useState([]);
    const [selectedItem, setselectedItem] = useState(null);
    const [step, setStep] = useState(1);
    const [toppingList, setToppingList] = useState([]);
    const selectedToppings = [];

    useEffect(() => { 

       if(items){
           updateData(); 
            
       }
       if(selectedItem) {
          console.log(selectedItem + " go");
          setStep(2);
       }

    },[selectedItem]);
  
    /**
     * Calls upon search change
     * @memberof updateInput
     * @param e [Object] - the event from a text change handler
     */
    const updateData = async () => {
      await fetch(`https://rickandmortyapi.com/api/character`)
          .then((response) => response.json())
          .then((data) => {
            setList(data.results.slice(0, 4));
          });
    };

    const onSelectTopping = (topping, isSelected) => {
      console.log('Topping clicked', topping, isSelected);
    }

    
  
    return (
      <>
      {step == 1 ? (
        <Burgers items={items} setItem={setselectedItem} ></Burgers>
      ) : (
        <OrderProduct 
          burger={burgerListData.burgers[0]} 
          toppingsList={toppingListData.ingredients} 
          onBackButtonClick={() => setStep(1)}
          onSelectTopping={onSelectTopping} ></OrderProduct>
      )}

      </>
    );
  };

export default Main