import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
       <h1>PostAdda</h1>
       <ul className='list-elemnt'>

        <span className='input-span'> 
        <input type="text" id="search" placeholder="Search your post.."/></span>
       
        
        <ul className='inner-list'>
          <li>Home</li>
        <li>Top Posts</li>
        <li>Contacts</li>
        <li>About us</li>

        </ul>
        
       
       </ul>
    </nav>
  )
}

export default Navbar