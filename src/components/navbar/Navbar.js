import React from 'react'; 
import '../navbar/Navbar.css'; 

const Navbar = () => {
  return (
    <div className='navbar'>Navbar
    <div className='navContainer'>
        <span className='logo'>Iambooking</span>
        <div className='navitems'>
            <button className='navButton'>Register</button>
            <button className='navButton'>Login</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar