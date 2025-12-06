import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then(res => setUsers(res.data))
            .catch(Error => console.log(Error))
    }, [])

    // function handleDelete(id) {
    //     axios.delete(`http://localhost:3000/users/${id}`,{
    //         method:"DELETE"
    //     })

    // }
    function handleDelete(id) {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => {
                setUsers(prev => prev.filter(user => user.id !== id));   
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>All users</h1>
            {[...users].reverse().map((user) => (
                <>
                    <h3 key={user.id}>{user.name}</h3>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </>
            ))}
        </div>
    )
}

export default GetUsers