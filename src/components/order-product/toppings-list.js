import React, { useContext } from "react";
import Topping from "./topping";
import { ingredients as toppingsList } from "./../../data/toppingsList.json";
import { StoreContext } from "../../store/storeProvider";
import { types } from '../../store/stoteReducer';

const filterToppings = (toppingType) => {
  const ingredientsList = toppingsList.filter((topping) => {
    return topping.type === toppingType;
  });

  const ingredientsDivs = ingredientsList.map((ingredient) => {
    return <Topping key={ingredient.id} topping={ingredient} />;
  });

  return ingredientsDivs;
};

const ToppingsList = () => {
  const ingredientsDivs = filterToppings("common");
  const saucesDivs = filterToppings("sauces");
  const extrasDivs = filterToppings("extras");

  const [store, dispatch] = useContext(StoreContext);
  const { ingredients, total, quantity, value } = store;


  const clickTopping = (info) => {
        

    let quan = quantity;

    let nIngredients = ingredients.length
   


    if(info === "-"){

        quan = quan - 1; 


        dispatch( { type: types.updateQuantity, payload: quan })
        dispatch( { type: types.updateTotal, payload: ( value + nIngredients) * quan })

    }

    if( info === "+"){
        quan = quan + 1; 
        dispatch( { type: types.updateQuantity, payload: quan })
        dispatch( { type: types.updateTotal, payload:  ( value + nIngredients) * quan })

    }

   }





  return (
    <div>
      <p className="topping-group-description">Select your ingredients:</p>
      {ingredientsDivs}
      <p className="topping-group-description">Add your sauces:</p>
      {saucesDivs}
      <p className="topping-group-description">Add extras:</p>
      {extrasDivs}
      <div className="comments-panel">
        <p>Add Comments</p>
        <input type="text" id="comments" placeholder="Comment" />
      </div>
      <div className="row quantity-panel">
        <div className="col-10">
          <span className="minus-quantity" onClick={() => clickTopping("-")}  >-</span>
          <span className="hamburguer-quantity">{quantity}</span>
          <span className="plus-quantity" onClick={() => clickTopping("+")}  >+</span>
        </div>
        <div className="col-10">
          <button className="add-to-basket">
            <span>Add to basket</span>{`$${total}.00`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToppingsList;
