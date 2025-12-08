import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Updateuser = () => {
    const { id } = useParams()
    console.log(id)

    const [user, setUser] = useState({
        name: "",
        lastname: "",
        age: "",
        email: ""
    })

    
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    
    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    
    function handleSubmit(e) {
        e.preventDefault()

        axios.put(`http://localhost:3000/users/${id}`, user)
            .then(() => {
                alert("User Updated Successfully!")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update User</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </div>

                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />
                </div>

                <div>
                    <label>Age</label>
                    <input type="number" name="age" value={user.age} onChange={handleChange} />
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} />
                </div>

                <button>Update User</button>
            </form>
        </div>
    )
}

export default Updateuser
