import React,{ useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'; 
import { ContactService } from '../../../services/ContactService';

const AddContact = () => {

    let[state, setState] = useState({
        loading:false,
        contact:{
                name:'', 
                photo:'', 
                mobile:'', 
                email:'', 
                company:'', 
                title:'', 
                groupId:'', 
        }, 
        groups:[], 
        errorMessage:"",


    })

    let updateInput = (event) =>{
        setState({
            ...state, 
            contact:{
                ...state.contact, 
                [event.target.name]: event.target.value 
            }
        })
    }
    
   const fetchResp = async()=>{
        setState((state)=>{
            return {...state, loading:true}
        })
    try {
        const resp = await ContactService.getGroups();
        setState((state)=>{
            return {...state, loading:false, groups:resp.data}
        })
    } catch (error) {
        console.log(error.message)
    }
    
   }
   useEffect(()=>{
    fetchResp();
   },[])

const submitForm =async(e)=>{
    e.preventDefault(); 
    try {
        let response = await ContactService.createContact(state.contact); 
        if(response) {
        Navigate('/contacts/list', {replace:true} ); 
        }
    } catch (error) {
        setState((state)=>{
            return {...state, errorMessage:error.message}
        }); 
        Navigate('/contacts/add', {replace:false})
    }
}


    let {loading, contact, groups,errorMessage } = state
  return (
    <>
    <section className='add-contact'>
        <div className='container'>
            <div className='row'>
                <div className='col p-3'>
                    <p className='h4 text-success fw-bold'>Create Contact</p>
                    <p> This is the point where you create your contact. I hope you get it. </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <form onSubmit={submitForm}>
                    <div className='mb-2'>
                        <input 
                                required={true}
                                name='name'
                                value={contact.name}
                                onChange={updateInput}
                                type='text' 
                                className="form-control" 
                                placeholder="Name"/>
                    </div>
                    <div className='mb-2'>
                        <input type='text'
                                name='photo'
                                value={contact.photo}
                                onChange={updateInput}
                                className="form-control"
                                 placeholder="Photo url"/>
                    </div>
                    <div className='mb-2'>
                        <input type='number'
                                    name='mobile'
                                    value={contact.mobile}
                                    onChange={updateInput}
                                className="form-control"
                                 placeholder="Mobile"/>
                    </div>
                    <div className='mb-2'>
                        <input type='email'
                        required={true}
                        name='email'
                        value={contact.email}
                        onChange={updateInput}
                         className="form-control" 
                         placeholder="Email"/>
                    </div>
                    <div className='mb-2'>
                                 <input type='text'
                                 name='company'
                                 value={contact.company}
                                 onChange={updateInput}
                                  className="form-control" 
                                  placeholder="Company name"/>
                    </div>
                    <div className='mb-2'>
                        <input type='text'
                                required={true}
                                name="title"
                                value={contact.title}
                                onChange={updateInput}
                                 className="form-control" 
                                 placeholder="Title"/>
                    </div>
                    <div className='mb-2'>
                        <select 
                                required={true}
                                name="groupId"
                                value={contact.groupId}
                                onChange={updateInput}
                                className='form-control'>
                            <option value=''>Select a Group</option>
                            {
                                groups.length > 0 && 
                                groups.map((group)=>{
                                    return (
                                        <option key={group.id}
                                        value={group.id}>
                                            {group.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='mb-2'>
                    <input type='submit' className="btn btn-success me-2" value="Create"/>
                    <Link to = {'/'} className='btn btn-dark'>
                        Cancel
                    </Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AddContact





















