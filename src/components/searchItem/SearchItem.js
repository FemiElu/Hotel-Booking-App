import React from 'react';
import './searchItem.css'; 

const SearchItem = () => {



  return (
    <main>
        <div className='searchItem'>
            <img 
                src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/382767171.jpg?k=bc927eeab25b01e6fd08e86d5402fbe32e29dc88438d623b2a88814bb49d25de&o=&hp=1'
                alt=''
                className='siImg' />
        <div className='siDesc'>
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className='siDistance'>500m from center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with air conditioning 
            </span>
            <span className='siFeatures'>
                Entire studio . 1 bathroom . 21m 1 full bed
            </span>
            <span className='siCancelOp'>Free cancelation</span>
            <span className='siCancelOpSubtitle'>
                You can cancel later, so lock in this great price today!
            </span>
            </div>  
            <div className='siDetails'></div>   
        </div>
    </main>
  )
}

export default SearchItem