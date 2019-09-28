import {SAVE_IMAGES } from '../constants/imageReducer'

export const setImages = (images) => {
    return {
        type: SAVE_IMAGES,
        images
        
    }
}

