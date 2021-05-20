import React,{ useContext }  from "react";
import { StoreContext } from "../../store/storeProvider";

const BurgerInfo = () => {
  const [store] = useContext(StoreContext);

  const { burger, value } = store;



  return (
    <div className="container" key={burger.id}>
      <div className="burger-image">
        <img src={burger.image} alt="Burger picture" />
      </div>
      <p className="burger-name">{burger.name}</p>
      <p className="burger-description">Specie: {burger.species}</p>
      <p className="burger-description">Status: {burger.status}</p>
      <p className="burger-description">location: {burger.location.name}</p>
     
      <p className="burger-price">{`$${value}.00`}</p>
    </div>
  );
};

export default BurgerInfo;
