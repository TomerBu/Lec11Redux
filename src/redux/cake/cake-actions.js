import { BUY_CAKE } from "./cake-types"

//action-creator:
export const buyCake = (amount = 1)=>{
    return {
        type: BUY_CAKE, 
        payload: amount
    }
}