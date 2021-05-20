
const initialStore = { 
   user: {},
   burger: {},
   value: 2,
   quantity: 1,
   total: 0,
   ingredients: [],
   step: 0
}

const types = {
    addUser: "add User",
    addBurger: "add Burger",
    updateStep: "update Step", 
    removeBurgrer: "remove Burger",
    addIngredientes: "include Ingredientes",
    updateCost: "update Cost",
    updateQuantity: "update Quantity",
    updateTotal: "update Total"
}


const StoreReducer = (state, action) => {
    switch (action.type){
        case types.updateStep:
            return {
                ...state,
                step: action.payload
            }
        case types.addUser:
            return {
                ...state,
                user: action.payload
            }
        case types.addBurger:
            return {
                ...state,
                burger: action.payload
            }
        case types.updateIngredient:    
            return {
                ...state,
                ingredients: action.payload,

            }
        case types.updateCost:    
            return {
                ...state,
                value: action.payload
            }
        case types.updateTotal:    
            return {
                ...state,
                total: action.payload
            }
        case types.updateQuantity:   
            return {
                ...state,
                quantity: action.payload
            }
        default:
            return state;
    }


};

export { initialStore, types }
export default StoreReducer;






























