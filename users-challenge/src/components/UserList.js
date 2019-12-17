import React, {useState, useEffect} from 'react'
import axios from 'axios';

const UserList = () => {
        const [users, setUsers] = useState();
    useEffect(() => {
        axios
        .get('http://localhost:3300/api/users')
        .then(response => {
            console.log(response);
            setUsers(response.data);
        })
        .catch(error => {
            console.dir(error);
        })
    })

    return (
        null
    )

}

export default UserList;