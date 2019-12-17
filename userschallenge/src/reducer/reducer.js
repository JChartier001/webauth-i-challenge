import {USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_REGISTER_START, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE} from "../action/action"


const initialState ={
    user: 
    {username: "",
    password: ''},
    isLoading: false,
    error: false
}

export function reducer(state = initialState, action){
    switch(action.type){
        case USER_LOGIN_START:
            return{
                isLoading: true
            }
        case USER_LOGIN_SUCCESS:
            return{
                user: action.payload,
                isLoading: false
            }
        case USER_LOGIN_FAILURE:
            return{
                isLoading: false,
                error: action.payload
            }
        case USER_REGISTER_START:
            return{
                isLoading: true
            }
        case USER_REGISTER_SUCCESS:
            return{
                user: action.payload,
                isLoding: false
            }
        case USER_REGISTER_FAILURE:
            return{
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

