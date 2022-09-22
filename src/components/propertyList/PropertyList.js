import React from 'react'; 
import './propertyList.css'

const PropertyList = () => {
  return (
    <>
    <div className='pList'>
        <div className='pListItem'>
            <img src='https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=' alt='' className='pListImg'/>
            <div className='pListTitles'>
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=' alt='' className='pListImg'/>
            <div className='pListTitles'>
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=' alt='' className='pListImg'/>
            <div className='pListTitles'>
            <h1>Cabins</h1>
            <h2>2331 hotels</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default PropertyList