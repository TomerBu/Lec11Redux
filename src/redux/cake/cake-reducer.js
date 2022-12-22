//rxreducer
import { BUY_CAKE } from "./cake-types"

const initialState = {
    numberOfCakes: 10,
}

//object destructuring for the action: {type, payload}
export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case BUY_CAKE:
            return {
                ...state, 
                numberOfCakes: state.numberOfCakes - payload
            }
        default: return state
    }
}

//export default reducer;

//yarn install
//yarn start