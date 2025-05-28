import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
       <h1>PostAdda</h1>
       <ul className='list-elemnt'>
        <span className='input-span'> <label for="search"></label>
        <input type="text" id="search" placeholder="Search your post.."/></span>
       
        
         
        <li>Home</li>
        <li>Top Posts</li>
        <li>Contacts</li>
        <li>About us</li>

       
       </ul>
    </nav>
  )
}

export default Navbar