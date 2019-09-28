import { INCREMENT, DECREMENT} from '../constants/counters'


/** 
 * 
 * @param {Number} state a simple number
 * @param {Object} action objet with 1 property. ex: {type: INCREMENT}
*/



const counterReducer = (state = 0, action ) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default: return state;
        }

};

export default counterReducer;