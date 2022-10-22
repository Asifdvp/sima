import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import './style.scss'
const Navbar = ({user}) => {
  return (
    <div className='navbar'>
      <h4 >Menu</h4>
     <div className='navbar__menu'> 
     <ul> 
      <li> <NavLink to='report' > Hesabat </NavLink>   </li>
     {user && <li> <NavLink to='certificate' > Sertifikat </NavLink>   </li>}
     <li> <NavLink to='package'> Paket </NavLink>   </li>
     {user  &&  <li> <NavLink to='credentials'> Credentials </NavLink>   </li> }
     {user &&   <li> <NavLink to='institutions'> Qurumlar </NavLink>   </li> }
      <li> <NavLink to='logout'> Çıxış </NavLink>   </li>
     
     </ul>
     </div>
      </div>
  )
}

export default Navbar