import React from 'react'

const Updateuser = () => {
     const [user, setuser] = useState({
            name: "",
            lastname: "",
            age: "",
            email: ""
        })
    
        function handleChange(e) {
            setuser({ ...user, [e.target.name]: e.target.value })
        }


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
    <div>
        <h1>User Update the User</h1>
         <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">First Name</label>
                    <input type="text" name="name" id="name" value={user.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" value={user.lastname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" value={user.age} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={user.email} onChange={handleChange} />
                </div>
                <button>Add User</button>
            </form>
    </div>
  )
}

export default Updateuser