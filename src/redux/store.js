import { createStore, combineReducers, applyMiddleware, bindActionCreators } from "redux";
import logger from "redux-logger";
import { buyCake, cakeReducer } from './cake'
const rootReducer = combineReducers({
    //more reducers:
    "cakes": cakeReducer
})


const store = createStore(rootReducer, applyMiddleware(logger))
export const cakeActions = bindActionCreators({ buyCake }, store.dispatch)

//store.dispatch(buyCake())
//actions.buyCake()

export default store;