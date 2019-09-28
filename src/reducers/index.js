import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import inputReducer from './inputReducer'
import imageReducer from './imageReducer'
import usersReducer from './usersReducer'

const allReducers = combineReducers({
    counterReducer,
    inputReducer,
    imageReducer,
    usersReducer

});

export default allReducers;