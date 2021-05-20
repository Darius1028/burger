
const initialStore = { 
   user: {},
   burger: {},
   ingredients: {},
   step: 0
}

const types = {
    addUser: "add User",
    addBurger: "add Burger",
    updateStep: "update Step", 
    removeBurgrer: "remove Burger",
    addIngredientes: "include Ingredientes",
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

        default:
            return state;
    }


};

export { initialStore, types }
export default StoreReducer;
