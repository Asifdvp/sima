import React from 'react'
import './style.scss';
// import profil from '../../assets/images/common/profil.jpg';
import user from '../../../assets/images/common/profil.jpg'
const Header = () => {
  return (
    <div className='header'>
<div className='header__user'> 
<div className='header__user__name'>
    Vüsal Rzayev Osman </div>
<div className='header__user__img'> 
<img src={user} alt=""/>

</div>
</div>

    </div>
  )
}

export default Header