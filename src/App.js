// import React from 'react'; 
// import { Routes, Route, Navigate } from 'react-router-dom'; 
// import ContactList from './components/contacts/contactList/ContactList';
// import EditContact from './components/contacts/editContacts/EditContact';
// import ViewContact from './components/contacts/viewContacts/ViewContact';
// import Navbar from './components/navbar/Navbar'; 
// import AddContact from './components/contacts/addContacts/AddContact';

// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <Routes>
//       <Route path={'/'} element={<Navigate to ={'/contacts/list'}/>}/>
//       <Route path={'/contacts/list'} element = {<ContactList/>} />
//       <Route path = {'/contacts/add/'} element = {<AddContact/>}/>
//       <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
//       <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
//     </Routes>
//     </>
//   )
// }

// export default App



import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Routes, Route, Navigate,} from 'react-router-dom';
import ContactList from './components/contacts/contactList/ContactList'; 
import ViewContacts from './components/contacts/viewContacts/ViewContact';
import EditContact from './components/contacts/editContacts/EditContact'
import AddContacts from './components/contacts/addContacts/AddContacts'
const App = () => {
  return (
    <div>
      <Navbar/> 
      <Routes>
        <Route path={'/'} element= {<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'}  element={<ContactList/>}/>
        <Route path={'/contacts/add'} element = {<AddContacts/>} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContacts/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      </Routes>
    </div>
  )
}

export default App

















