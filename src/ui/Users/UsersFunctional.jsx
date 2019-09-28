import React,{ useState,useEffect,Fragment } from 'react'
import Button from '../../components/Button/Button';
import { connect, useDispatch } from 'react-redux'
import { getUsers } from '../../reducers/usersReducer';


const UsersFunctional = (props)=>{
    const {users} = props;
    const dispatch = useDispatch();
    // const [users,setUsers]=useState([])
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(jsonThing => setUsers(jsonThing))
    // },[]);
    // const fetchUsers=()=>{
    //             fetch('https://jsonplaceholder.typicode.com/users')
    //             .then(response => response.json())
    //             .then(jsonThing => setUsers(jsonThing))
    // }
    return(
        <Fragment>
        <ul>
        {
            users.map((user,i)=>{
                return(<li key={i}>{user.name}</li>)
            })
        }
       </ul>
       <Button className="btn" text="BOTON" onClick={() => dispatch(getUsers())
    }/>
        </Fragment>
    );
};


const mapStateToProps = (state) => ({users:state.usersReducer.users})


export default connect(mapStateToProps) (UsersFunctional);
