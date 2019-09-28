import { UPDATE_NAME, CLEAR_FORM } from '../constants/input'

export const updateName = (name) => {
    return {
        type: UPDATE_NAME,
        name
    }
}

export const cleanForm = () => {
    return{
        type: CLEAR_FORM
    }
}