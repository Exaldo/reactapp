import {INCREMENT, DECREMENT} from '../constants/counters'

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {

    return {
        type: DECREMENT
    }
}