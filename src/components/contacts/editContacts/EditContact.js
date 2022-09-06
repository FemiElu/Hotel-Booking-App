import React,{ useState, useEffect } from 'react'; 
import { Link,useParams } from 'react-router-dom'; 
import { ContactService } from '../../../services/ContactService';

const EditContact = () => {
                const {contactId} = useParams();

    let [state, setState] = useState({
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
        errorMessage:''
    })

const fetchData = async() =>{
        setState({...state, loading:true})
        try {
            let response = await ContactService.getContact(contactId); 
            setState((state) =>{
                return {...state, loading:false, contact:response.data}
            })

        } catch (error) {
            setState({...state, loading:false, errorMessage:error.message})
        }
}

useEffect(()=>{
    fetchData();
},[contactId])

let updateInput = (e)=>{
    setState((state)=>{
        return {...state, contact:{
            ...state.contact, 
            [e.target.name]:e.target.value
        }}
    })
}

let {loading, contact, group, errorMessage} = state
  return (
    <>
    <pre>{JSON.stringify(contact)}</pre>
    <section className='add-contact'> 
        <div className='container'>
            <div className='row'>
                <div className='col p-3'>
                    <p className='h4 text-primary fw-bold'>Edit Contact</p>
                    <p> This is the point where you edit your contact. I hope you get it. </p>
                </div>
            </div>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <form>
                    <div className='mb-2'>
                        <input type='text' 
                                name='name'
                                onChange={updateInput}
                                value={contact.name}
                                className="form-control" 
                                placeholder="Name"/>
                    </div>
                    <div className='mb-2'>
                        <input type='text' className="form-control" placeholder="Photo url"/>
                    </div>
                    <div className='mb-2'>
                        <input type='number' className="form-control" placeholder="Mobile"/>
                    </div>
                    <div className='mb-2'>
                        <input type='email' className="form-control" placeholder="Email"/>
                    </div>
                    <div className='mb-2'>
                        <input type='text' className="form-control" placeholder="Company name"/>
                    </div>
                    <div className='mb-2'>
                        <input type='text' className="form-control" placeholder="Title"/>
                    </div>
                    <div className='mb-2'>
                        <select className='form-control'>
                            <option value=''>Select a Group</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                    <input type='submit' className="btn btn-primary me-2" value="Update"/>
                    <Link to = {'/'} className='btn btn-dark'>
                        Cancel
                    </Link>
                    </div>
                    </form>
                </div>
                <div className='col-md-6'>
                    <img src='https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png' alt='person' className='contact-img'/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default EditContact





