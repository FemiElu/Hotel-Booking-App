import React from 'react'; 
import '../navbar/Navbar.css'; 

const Navbar = () => {

  
  const listing= [
      {isPacked:true,
      itemName:'books'},
      {isPacked:false,
      itemName:'board'},
      {
        isPacked:true,
        itemName:'food'
      }

    
  ]
  
  return (
    <div className='navbar'>
    
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