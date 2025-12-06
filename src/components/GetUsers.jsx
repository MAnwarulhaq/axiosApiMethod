import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetUsers = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=> setUsers(res.data))
        .catch( Error => console.log(Error))
    },[])
  return (
    <div>
        <h1>All users</h1>
        {users.map((user)=>(
            <h3 key={user.id}>{user.name}</h3>
        ))}
    </div>
  )
}

export default GetUsers