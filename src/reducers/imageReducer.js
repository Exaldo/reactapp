import { SAVE_IMAGES } from '../constants/imageReducer'

const initialState = {
    images: []
};

const imageReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SAVE_IMAGES:
            return { ...state, images:action.images}
            default:
                return state;    
}};

export default imageReducer;