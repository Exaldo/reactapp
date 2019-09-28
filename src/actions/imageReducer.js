import {SAVE_IMAGES } from '../constants/imageReducer'
import Axios from 'axios'

export const setImages = (images) => {
    return {
        type: SAVE_IMAGES,
        images
        
    }
}
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