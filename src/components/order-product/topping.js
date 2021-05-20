import React, {useState, useContext} from 'react';
import { StoreContext } from '../../store/storeProvider';
import { types } from '../../store/stoteReducer';


const Topping = ({topping}) => {
    const [toppingSelec, setToppingSelec] = useState(false);
    const [store, dispatch]  = useContext(StoreContext);
    const {ingredients, total, quantity, value} = store;
    

    const clickTopping = (topping) => {
        
        let data = ingredients;
        let nIngredients = ingredients.length ;
        
        
        if(!toppingSelec){
            data = [...ingredients, topping];
            nIngredients = nIngredients + 1
        }
        else{
           data = ingredients.filter( (item ) => item.id !== topping.id )
           nIngredients = nIngredients - 1
        }


        dispatch( { type: types.updateIngredient, payload: data })
        dispatch( { type: types.updateTotal, payload: ( nIngredients + value) * quantity  })
        

     setToppingSelec(!toppingSelec);
  
    }


    return (
        <>  
            <div key={topping.id} className="row ingredient" onClick={() => clickTopping(topping) }>
                <div className="col-10">{topping.description}</div>
                <div className="col-2">
                    <i className={`${toppingSelec?  "fas fa-check-circle": "far fa-circle"}`}></i>
                 
                </div>
            </div>
        </>
    )
}

export default Topping;