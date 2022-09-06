import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { ContactService } from '../../../services/ContactService';
import ContactList from '../contactList/ContactList';
import Spinner from '../../Spinner';

const ViewContact = () => {

    const {contactId} = useParams(); 

        let [state, setState] = useState({
            loading:false, 
            contact:{}, 
            errorMessage:'',
            
        })
    
        const fetchData =async()=>{
            setState((state)=>{
                return{...state, loading:true}
            })
           try {
            let resp = await ContactService.getContact(contactId); 
             
            setState((state)=>{
                return {
                    ...state, loading:false, contact:resp.data, 
                }
            })
           } catch (error) {
            console.log(error)
            
           }
        }
        
        useEffect(()=>{
            fetchData()
        },[contactId])

            const {loading, error, contact} = state; 
    return (
    <>
    { loading? <Spinner/>: <>
    
    {Object.keys(contact).length > 0 &&
    
    <section className='view-contact mt-3'>
    <div className='container'>

   
                    <div className='row align-items-center'>
            
            <div className='col-md-4'>
            <img src={contact.photo} alt='person' className='contact-img'/>
            </div>
            <div className='col-md-8'>
            <ul className='list-group'>
                        <li className='list-group-item list-group-item-action'>
                            Name: <span className = "fw-bold">{contact.name}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                            Phone: <span className = "fw-bold">{contact.number}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                            email: <span className = "fw-bold">{contact.email}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                            company: <span className = "fw-bold">{contact.company}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                            title: <span className = "fw-bold">{contact.title}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                            group: <span className = "fw-bold">{contact.group}</span>
                        </li>
                    </ul>
            </div>
        </div>
             
        
        <div className='row'>
            <div className='col'>
                <Link to={'/'} className='btn btn-warning'>
                    Back
                </Link>
            </div>
        </div>
    </div>
</section>
    }

    </>}

    </>)
}

export default ViewContact; 




















