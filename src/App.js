import React from 'react'; 
import { Route, Routes } from 'react-router-dom'; 

import Home from './Pages/home/Home'; 
import List from './Pages/list/List'; 
import Hotel from './Pages/list/List'; 

const App = () => {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/hotels'} element={<List/>}/>
      <Route path={'/hotels/:id'} element={<Hotel/>}/>
    </Routes>
    </>
  )
}

export default App



