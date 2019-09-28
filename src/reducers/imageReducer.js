import Axios from 'axios';

//ACTION TYPE /CONSTANT 
const ACTION = {
    SET_IMAGES: 'fs-js-04-2019/gallery/SET_IMAGES'
}

//DEFAULT STATE
const initialState = {
    images:[]
};


export default (state = initialState, action ) => {
    switch (action.type) {
        case ACTION.SET_IMAGES:
            return { ...state, images:action.images}
            default:
                return state;    
}};

//ACTIONS
export const setImages = (images) => {
    return {
        type: ACTION.SET_IMAGES,
        images
        
    }
}

//ASYNC ACTION FUNCTION
export const getImages = () => {

    return async (dispatch) => {
        const images = await Axios.get('https://picsum.photos/v2/list?limit=6', {
        params: {
            limit:6
     }
    });
    
    console.log('AXIOS IMAGES =>', images);
    dispatch(setImages(images.data));
    
    }};