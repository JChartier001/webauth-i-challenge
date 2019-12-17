import axios from "axios";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";

export function userLogin(user){
    return dispatch => {
        dispatch({type: USER_LOGIN_START});
        axios.post('https://localhost:3300/api/auth/login', {
            username: user.username,
            password: user.password
        })
        .then(response => {
            console.log(response);
            dispatch({type: USER_LOGIN_SUCCESS, payload: response})
        })
        .catch(err => {
            console.log(err);
            dispatch({type: USER_LOGIN_FAILURE, payload: err})
        })
    }
}

export function userRegister(user){
    return dispatch => {
        dispatch({type: USER_REGISTER_START});
        axios.post('https://localhost:3300/api/auth/register', user)
        .then(response => {
            console.log(response);
            dispatch({type: USER_REGISTER_SUCCESS, payload: response})
        })
        .catch(err => {
            console.dir(err);
            dispatch({type: USER_REGISTER_FAILURE, payload: err})
        })
    }
}