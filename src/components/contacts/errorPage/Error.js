import React from 'react'; 
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
    <div>This is where you come to when you are lost</div>
  <Link to={'/'}>
    Go back home
  </Link>
  </>
    )
}

export default Error