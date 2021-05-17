import React from 'react';
import Topping from './topping';

const filterToppings = (toppingsList, toppingType, selectTopping) => {
    const ingredientsList = toppingsList.filter((topping) => {
        return topping.type === toppingType;
    });
    const ingredientsDivs = ingredientsList.map((ingredient) => {
        return <Topping key={ingredient.id} topping={ingredient} selectTopping={selectTopping} />
    });
    return ingredientsDivs;
}

const ToppingsList = ({ toppingsList , selectTopping}) => { 
    const ingredientsDivs = filterToppings(toppingsList, 'common', selectTopping);
    const saucesDivs = filterToppings(toppingsList, 'sauces', selectTopping);
    const extrasDivs = filterToppings(toppingsList, 'extras', selectTopping);
 
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
                <div className="col-4">
                    <span className="minus-quantity">-</span>
                    <span className="hamburguer-quantity">1</span>
                    <span className="plus-quantity">+</span>
                </div>
                <div className="col-8">
                    <button className="add-to-basket"><span>Add to basket</span> $0.00</button>
                </div>
            </div>
        </div>
    )
}

export default ToppingsList;