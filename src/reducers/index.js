import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import inputReducer from './inputReducer'
import imageReducer from './imageReducer'

const allReducers = combineReducers({
    counterReducer,
    inputReducer,
    imageReducer

});

export default allReducers;