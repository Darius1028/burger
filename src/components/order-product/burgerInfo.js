import React from 'react';

import hamburguesaImg from './burgerOpened.png';

const BurgerInfo = ({burger}) => {
    return (
        <div className="container">
            <div className="burger-image">
            <img  src={hamburguesaImg} alt="Burger picture"/>
            </div>
            <p className="burger-name">{burger.burgerName}</p>
            <p className="burger-description">{burger.description}</p>
            <p className="burger-price">${burger.price}</p>
        </div>
    )
}

export default BurgerInfo;