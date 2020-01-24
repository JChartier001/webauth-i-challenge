import React,{useState} from 'react'
import axios from "axios";

const Login = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };
    console.log(user);

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        console.log('submit', props)
        axios
        .post('http://localhost:3300/api/auth/login', {
            username: user.username,
            password: user.password
        })
        .then(response => {
            console.log(response);
            props.history.push('/user')
            
        })
        .catch(error => {
            console.log(error)
        });
    };

    return(
        <div>
            <form onSubmit={handleSubmit} >
            <input type="text" name='username' onChange={handleInput} placeholder='username' value={user.username}/>
            <input type="password" name='password' onChange={handleInput} placeholder='password' value={user.password}/>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )

}
export default Login;