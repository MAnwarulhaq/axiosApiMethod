import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                <div  key={user.id}>
                    <h3>{user.name}</h3>
                    <Link to={`/updateuser/${user.id}`}>
                    <button >Edite</button>
                    </Link>

                    <button  onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default GetUsers