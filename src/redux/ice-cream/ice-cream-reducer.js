import { BUY_ICECREAM } from "./ice-cream-types"

const initialState = {
    numberOfIceCreames: 20
}

export const iceCreamReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BUY_ICECREAM:
            return { ...state, numberOfIceCreames: state.numberOfIceCreames - payload }

        default:
            return state
    }
}
