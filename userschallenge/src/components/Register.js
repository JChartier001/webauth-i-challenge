import React, {useState} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {userRegister} from "../action/action"



function Register () {
    const user = useSelector(state => state.user);
    const [userData, setUserData] =useState([{
        username: "",
        password: ""
    }]);
    const dispatch = useDispatch();
    console.log("userdata", userData);
    
    const handleInputChange = e => {
        ...user,
        setUserData({[e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(userRegister({
            username: userData.username,
            password: userData.password
        }))
    }

    return(
       <div>
           <div>
               <form onSubmit={handleSubmit}>
               <input text="type" name="username" onChange={handleInputChange} placeholder="Name" value={userData.username}/>
               <input text="password" name="password" onChange={handleInputChange}  placeholder="Password" value={userData.password} />
               <button>Submit</button>
               </form>
           </div>
       </div>
    )
};

export default Register;

