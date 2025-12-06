import axios from 'axios'
import React, { useState } from 'react'

const AddUsers = () => {
    const [user,setuser] = useState()

    function handleChange(e){
        setuser({...user,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(user){
            axios.post("http://localhost:3000/users",user)
            alert("submit successful!")
            console.log(user)
        }
    }

  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">First Name</label>
                <input type="text" name="name" id="name" onChange={handleChange} />
            </div>
             <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" onChange={handleChange} />
            </div>
             <div>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" onChange={handleChange} />
            </div>
             <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={handleChange}/>
            </div>
            <button>Add User</button>
        </form>
    </>
  )
}

export default AddUsers