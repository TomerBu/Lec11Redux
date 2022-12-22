import { BUY_CAKE } from "./cake-types"
//rxaction
//action-creator:
export const buyCake = (amount = 1)=>{
    return {
        type: BUY_CAKE, 
        payload: amount
    }
}