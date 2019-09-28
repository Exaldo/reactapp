import { UPDATE_NAME, UPDATE_LAST_NAME, UPDATE_AGE, CLEAR_FORM } from '../constants/input'


/** 
 * 
 * @param {Number} state a simple number
 * @param {Object} action objet with 1 property. ex: {type: INCREMENT}
*/

const initialState = {
    user: {
        name: '',
        lastName:'',
        age: null
    },
    isLoggedIn: true
}


const inputReducer = (state = initialState, action ) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state, 
                user: {
                    ...state.user,
                    name: action.name
                }
            };

            case CLEAR_FORM:
            return { ...state, user: initialState.user };
            default:
                    return state;

       
        }

};

export default inputReducer;