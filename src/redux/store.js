import { createStore, combineReducers, applyMiddleware, bindActionCreators } from "redux";
import logger from "redux-logger";
import { buyCake, cakeReducer } from './cake'
import { iceCreamReducer, buyIceCream } from './ice-cream'

const rootReducer = combineReducers({
    //more reducers:
    "cakes": cakeReducer,
    "icecreams": iceCreamReducer
})


const store = createStore(rootReducer, applyMiddleware(logger))
export const cakeActions = bindActionCreators({ buyCake }, store.dispatch)
export const iceCreamActions = bindActionCreators({ buyIceCream }, store.dispatch)
export default store;