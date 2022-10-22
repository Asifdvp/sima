import React from 'react'
import './style.css';
import profil from '../../assets/images/profil.jpg'
const Header = () => {
  return (
    <div className='header'>
<div className='user'> 
<div className='user-name'>
    Vüsal Rzayev Osman </div>
<div className='user-img'> 
<img src={profil} alt=""/>

</div>
</div>

    </div>
  )
}

export default Header