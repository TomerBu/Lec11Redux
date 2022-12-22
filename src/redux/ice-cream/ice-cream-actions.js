import { BUY_ICECREAM } from "./ice-cream-types"

//rxaction
export const buyIceCream = (amount = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: amount
    }
}