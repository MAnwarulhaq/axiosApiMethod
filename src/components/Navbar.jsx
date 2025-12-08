import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">
         <h1>Axios</h1>
      </Link>
     
      <Link to="/addusers">
        <p>Add User</p>
      </Link>
      <Link to="/updateuser">
        <p>Update User</p>
      </Link>
    </div>
  )
}

export default Navbar