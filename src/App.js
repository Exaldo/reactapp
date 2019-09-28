import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React,{useState} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers'
import thunk  from 'redux-thunk'
// import logo from './logo.svg';
// import Person from './Person';
import UsersFunctional from './ui/Users/UsersFunctional';
import './App.css';
// import Button from './components/Button/Button'
import Nav  from './components/Nav'
import Home from './ui/Home';
import About from './ui/About/About'
import Notfound from './components/Notfound/Notfound'
import Gallery from './components/Gallery/Gallery'
import GalleryDetail from './components/Gallery/GalleryDetail'

// const logger = store => next => action => {
//   console.log('MY ACTION IS =>', action);
  
// }

const mainStore = createStore(allReducers, applyMiddleware(thunk));

const App=()=>{
  
  return ( <Provider store ={mainStore}>
    <Router>
      <div className='App'>
      
      <Nav />
      <Switch> 
        <Route path="/" exact component={Home}/>
        <Route path="/gallery" exact component={Gallery}/>
        <Route path="/gallery/:id/:user" component={GalleryDetail}/>
        <Route path="/Users" component={UsersFunctional}/>
        <Route path="/About" component={About}/>
        <Route component={Notfound} />      
      </Switch>
      </div>
    </Router>
    </Provider>
  );
}


export default App;
