import axios from 'axios'
import React, { useState } from 'react'

const AddUsers = () => {
    const [user, setuser] = useState({
        name: "",
        lastname: "",
        age: "",
        email: ""
    })

    function handleChange(e) {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     if(user){
    //         axios.post("http://localhost:3000/users",user)
    //         alert("submit successful!")
    //         console.log(user)
    //     }
    // }
    function handleSubmit(e) {
        e.preventDefault();

        if (!user || Object.keys(user).length === 0) {
            alert("Please fill the form");
            return;
        }

        axios.post("http://localhost:3000/users", user)
            .then(() => {
                alert("Submit Successful!");
                console.log(user);
                setuser({
                    name: "",
                    lastname: "",
                    age: "",
                    email: ""
                }); // clear form
            })
            .catch(err => console.log(err));
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
                    <input type="text" name="email" id="email" onChange={handleChange} />
                </div>
                <button>Add User</button>
            </form>
        </>
    )
}

export default AddUsers