import React, {useState} from 'react';

const Topping = ({topping, selectTopping}) => {
    const [toppingSelected, setToppingSelected] = useState(false);
    //<i class="fas fa-check-circle"></i>
    
    return (
        <div key={topping.id} className="row ingredient" onClick={() => {
            setToppingSelected(!toppingSelected);
            selectTopping(topping, toppingSelected)
        }}>
            <div className="col-10">{topping.description}</div>
            
            <div className="col-2"><i className={`${toppingSelected?  "fas fa-check-circle": "far fa-circle"}`}></i></div>
        </div>
    )
}

export default Topping;