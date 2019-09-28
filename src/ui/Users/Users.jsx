import React,{Component} from 'react'
import { useDispatch } from 'react-redux'
// import Axios from 'axios'
import { connect, useDispatch } from 'react-redux'

class Users extends Component{
    const dispatch = useDispatch();
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         users:[]
    //     }
    

    componentDidMount(){
        dispatch (getUsers())
        
        
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(jsonThing => this.setState({users:jsonThing}))
    }
    render(){
        const {users}=this.state
        console.log(users)
        return(
            <ul>
                {
                    users.map((user,i)=>{
                    return(<li key={i}>{user.name}</li>)
                    })
                }
            </ul>
        )
    }


const mapStateToProps = (state) => ({users:state.usersReducer.users})


export default connect(mapStateToProps) (Users);