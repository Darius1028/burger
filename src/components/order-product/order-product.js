import React from 'react';
import BurgerInfo from './burgerInfo';
import './order-product.css';
import ToppingsList from './toppings-list';
 

const OrderProduct = ({burger, toppingsList, onBackButtonClick, onSelectTopping}) => { 

    console.log({burger, toppingsList, onBackButtonClick})
    return (
        <div className="container order-product-container">
            <div className="row back-panel" onClick={onBackButtonClick}>
                <div className="col"><i className="fas fa-arrow-left"></i> Back</div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <BurgerInfo burger={burger} />
                </div>
                <div className="col-md-4">
                    <ToppingsList toppingsList={toppingsList} selectTopping={onSelectTopping} />
                </div>
            </div>
        </div>
    )
}

export default OrderProduct;