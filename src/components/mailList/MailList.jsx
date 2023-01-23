import React from 'react'; 
import './mailList.css'; 

const MailList = () => {
  return (
    <main className='mail'>
        <h1 className='mailTitle'>Save time, save money</h1>
        <span className='mailDesc'>Sign up and we'll send</span>
        <div className='mailInputContainer'>
            <input type='text' placeholder='your email'/>
        </div>
    </main>
  )
}

export default MailList