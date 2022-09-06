import React from 'react'; 
import spinner from '../assets/Img _folder/loading.gif'; 

const Spinner = () => {
  return (
    <div>
        <img src={spinner}  className="d-block m-auto" style={{width:"200px"}}/>
    </div>
  )
}

export default Spinner