import { SET_USERS } from '../constants/users'
import Axios from 'axios'

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
        
    }
}
export const getUsers = () => {

return async (dispatch) => {
    const users = await Axios.get('https://jsonplaceholder.typicode.com/users', {
    params: {
        limit:6
 }
});

console.log('AXIOS USERS =>', users);
dispatch(setUsers(users.data));

}};