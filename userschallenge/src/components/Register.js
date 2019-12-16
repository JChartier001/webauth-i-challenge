import React, {useState} from 'react';
import axios from "axios";



const Register = () =>{
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    
    console.log(user);

    const handleInput = e =>{
        setUser({ ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (user, e) => {
        e.preventDefault();

        axios
        .post('http://localhost:5000/api/auth/register', {
            user
        })
        .then(response => {
            console.log(response);

        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
       <div>
           <div>
               <form onSubmit={() => {handleSubmit(user)}}>
               <input text="type" name="username" onInput={handleInput}/>
               <input text="password" name="password" onInput={handleInput}/>
               <button type="submit" >Submit</button>
               </form>
           </div>
       </div>
    )
};

export default Register;

