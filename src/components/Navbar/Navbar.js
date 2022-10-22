import React from 'react'
import {  NavLink } from 'react-router-dom'
import './style.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h4 >Menu</h4>
     <div className='menu'> 
     <ul> 
      <li> <NavLink to='hesabat' > Hesabat </NavLink>   </li>
      <li> <NavLink to='sertifikat' > Sertifikat </NavLink>   </li>
      <li> <NavLink to='paket'> Paket </NavLink>   </li>
      <li> <NavLink to='credentials'> Credentials </NavLink>   </li>
      <li> <NavLink to='logout'> Çıxış </NavLink>   </li>
     
     </ul>
     </div>
      </div>
  )
}

export default Navbar