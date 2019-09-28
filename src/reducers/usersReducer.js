import Axios from 'axios'


//ACTION TYPE /CONSTANT
const ACTION = {
    SET_USERS: 'fs-js-04-2019/gallery/SET_USERS'

}

//DEFAULT STATE
const initialState = {
    users: []
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case ACTION.SET_USERS:
            return { ...state, users:action.users}
            default:
                return state;    
}};

//ACTIONS
export const setUsers = (users) => {
    return {
        type: ACTION.SET_USERS,
        users
        
    }
}

//ASYNC ACTION FUNCTION
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