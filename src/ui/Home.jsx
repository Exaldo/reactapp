import React, {useState, Fragment} from 'react';
import { increment, decrement} from '../actions/counters'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../components/Button/Button'
import Input from '../components/input/Input'
import { updateName , cleanForm} from '../actions/input'




const Home = () => {
    // const [person, setPerson] = useState('');

    // const serPersoninfo =(prop, value) => {

    //     const MyPerson = person;
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counterReducer);
    const person = useSelector(store => store.inputReducer);
    const images = useSelector(store => store.imageReducer );
    return (
        <Fragment>
       Counter is: {counter} and my name is: {person.user.name}
       <Input
        value={person.user.name}
        placeholder='Set your name'
        onChange={(e) => dispatch(updateName(e.target.value))}
        />
       <Button text="+" onClick={() => dispatch(increment())} />
       <Button text="-" onClick={() => dispatch(decrement())} />
        


        </Fragment>
        
    )
}

export default Home;