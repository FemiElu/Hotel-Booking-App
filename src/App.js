import React from 'react'; 
import {Routes, Route} from 'react-router-dom'; 

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/contacts/list'} element={<ContactList/>}/>
   </Routes>
   </>
  )
}

export default App