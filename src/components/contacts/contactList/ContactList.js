// import React,{ useEffect, useState,} from 'react'; 
// import { Link } from 'react-router-dom'; 
// import { ContactService } from '../../../services/ContactService';
// import Spinner from '../../navbar/spinner/Spinner';


// const ContactList = () => {

// let [state, setState] = useState({
//     loading:false, 
//     contacts:[], 
//     errorMessage:''
// });

// const fetchData =  async()=>{

// try {
//     setState((state)=>{
//         return {...state, loading:true}; 
//     })
//     let response = await ContactService.getAllContacts(); 
//     setState((state)=>{
//         return {...state,loading:false, contacts:response.data}
//     })
// } catch (error) {
    
    
// }

// }; 

// useEffect(()=>{
//     fetchData(); 
// },[])

// let { loading, contacts, errorMessage } = state;


//   return (
//     <>
   
//     <section className='contact-search p-3'>
//         <div className='container'>
//             <div className='grid'>
//                 <div className='row'>
//                     <div className='col'>
//                         <p className='h3 fw-bold'>Contact Manager
//                         <Link to ={'/contacts/add'} className='btn btn-primary ms-2'>
//                         Add <i className='fa fa-plus-circle me-2'/>
//                         </Link>
//                         </p>  
//                         <p className='fst-italic'>This is supposed to be a dummy text. So make of it whatever and however you may for all I care
//                         </p>
//                     </div>
//                 </div>
//                 <div className='row'>
//                     <div className='col-md-6'>
//                         <form className='row'>
//                             <div className='col'>
//                             <div className='mb-2'>
//                                 <input type='text' className='form-control' placeholder = 'search Names'/>
//                             </div>
//                             </div>
//                             <div className='col'>
//                             <div className='mb-2'>
//                                 <input type='submit' className='btn btn-outline-dark' value='search'/>
//                             </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     { 
//     loading? <Spinner/> : <React.Fragment>

//     <section className='contact-list'>
//     <div className='container'>
//         <div className='row'>
            
//             { 
//             contacts.length > 0 && 
//             contacts.map((item)=>{
//                 return (
//                     <div className='col-md-6' key={item.id}>
//                     <div className='card mb-2'>
//                         <div className='card-body'>
//                             <div className='row align-items-center d-flex justify-content-around'>
//                             <div className='col-md-4'>
//                             <img src={item.photo} alt='person' className='contact-img'/>
//                             </div>
//                             <div className='col-md-7'>
//                             <ul className='list-group'>
//                                 <li className='list-group-item list-group-item-action'>
//                                     Name: <span className = "fw-bold">{item.name}</span>
//                                 </li>
//                                 <li className='list-group-item list-group-item-action'>
//                                     Phone: <span className = "fw-bold">{item.mobile}</span>
//                                 </li>
//                                 <li className='list-group-item list-group-item-action'>
//                                     email: <span className = "fw-bold">{item.email}</span>
//                                 </li>
//                             </ul>
//                             </div>
//                             <div className='col-md-1 d-flex flex-column align-items-center'>
//                             <Link to={`/contacts/view/:${item.id}`} className='btn btn-warning my-1'>
//                             <i className='fa fa-eye'/>
//                             </Link>
//                             <Link to ={`/contacts/edit/:${item.id}`} className='btn btn-primary my-1'>
//                                 <i className='fa fa-pen'/>
//                             </Link>
//                             <button className ="btn btn-danger my-1">
//                                 <i className="fa fa-trash"/>
//                             </button>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 )
//             })
//             }

            

            
//         </div>
//     </div>
//     </section>
//     </React.Fragment>
//     }

//     </>
//   )
// }

// export default ContactList

import React,{ useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../Spinner';

const ContactList = () => {

    const [state, setState] = useState({
        loading:false, 
        contacts:[], 
        errorMessage:""
    })

   const fetchData = async() =>{
    setState((state)=>{
        return {...state, loading:true}
    })
    try {
        let response = await ContactService.getAllContacts(); 
        setState((state)=>{
            return {...state, loading:false, contacts:response.data}
        })
    } catch (error) {
        setState((state)=>{
            return {...state, loading:false, errorMessage:error.message}
        })
    }
   }

    useEffect(()=>{
fetchData(); 
    },[])

    let {loading, error, contacts} = state; 
  return (
    <div>
        <section className='contact-search p-3'>
            <div className='container'>
                <div className='row'>
                <div className="grid">
                    <div className='col'>
                        <p className='h3 fw-bold'>Debt Invoice Dashboard
                        <Link to ={'/contacts/add'} className='btn btn-primary ms-2'>
                            <i className='fa fa-plus-circle me-2'/>New
                        </Link>
                        </p>
                        <p className='fst-italic'>This is the place where you can add new contact</p>
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <form className='row'>
                            <div className='col mb-2'>
                        <input type='text' className='form-control' placeholder="Search Names"/>
                        </div>
                        <div className='col mb-2'>
                        <input type='submit' className='btn btn-outline-success' value="Search"/>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        {loading? <Spinner/> : 
        <>
        <section className='contact-list'>
        <div className='container'>
            <div className='row'>
                {contacts.length > 0 && contacts.map((item)=>{
                    return (

                        <div className='col-md-6 mb-2'  key={item.id}>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row align-items-center d-flex justify-content-around'>
                                    <div className='col-md-4'>
                                    <img src={item.photo} className='contact-img'/>
                                    </div>
                                    <div className='col-md-7'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name: <span className='fw-bold'>{item.name}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Mobile: <span className='fw-bold'>{item.mobile}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Email: <span className='fw-bold'>{item.email}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Debt Profile <span className='fw-bold'>{item.debtProfile}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-1 d-flex flex-column align-items-center'>
                                        <Link to={`/contacts/view/${item.id}`} className='btn btn-warning mb-1'>
                                            <i className='fa fa-eye'/>
                                        </Link>
                                        <Link to={`/contacts/edit/${item.id}`} className='btn btn-info mb-1'>
                                            <i className='fa fa-pen' />
                                        </Link>
                                        <button className='btn btn-danger'>
                                            <i className='fa fa-trash'></i>
                                            </button>       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}

            </div>
            
        </div>
        </section>
        </>
        
        }
        
       
    </div>
  )
}

export default ContactList


















