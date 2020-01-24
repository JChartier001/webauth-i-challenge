import React from 'react';
import Login from "./components/Login"
import {Route} from "react-router-dom";
import Register from "./components/Register";
import UserList from "./components/UserList"

import './App.css';

function App() {
  return (
    <div className="App">
     <Route exact path='/login'render={props => (
        <Login {...props}/>
      )}/>
     <Route exact path='/' component={Register}/>
     <Route path='/user' component={UserList}/>
    </div>
  );
}

export default App;
