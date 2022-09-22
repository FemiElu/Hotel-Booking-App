import React, { useState } from 'react'; 
import '../header/header.css'; 
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from 'date-fns'; 

const Header = ({type}) => {

  const [openDate, setOpenDate] = useState(false); 
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

const [openOptions, setOpenOptions] = useState(true); 
const [options, setOptions] = useState({
  adult:1, 
  children:0,
  room:0
})

const handleClick=(val, figure) =>{
  setOptions((prev)=>{
    return {
      ...prev, [val]:figure === 'i'? options[val] + 1: options[val] -1
    }
  }).filter((prev)=>prev !==0)
}




const { adult, children, room} =options
  return (
    <div className='header'>
      <div className ={type==='list'? 'headerContainer listMode': 'headerContainer'}>
    <div className='headerList'>
      <div className='headerListItem active'>
        <i className='fa fa-bed'/>
        <span>Stays</span>
        </div>
        <div className='headerListItem'>
        <i className='fa fa-plane'/>
        <span>Flights</span>
        </div>
        <div className='headerListItem'>
        <i className='fa fa-car'/>
        <span>Car rentals</span>
        </div>
        <div className='headerListItem'>
        <i className='fa fa-bed'/>
        <span>Attractions</span>
        </div>
        <div className='headerListItem'>
        <i className='fa fa-taxi'/>
        <span>Airport taxis</span>
      </div>
    </div>
    { type !== "list" &&
      <>
      <h1 className='headerTitle'> A lifetime of discounts? It's Genius.</h1>
    <p className='headerDesc'>
      Get rewarded for your travels -unlock instant savings of 10% or more with a free Lamabooking account
    </p>
    <button className='headerBtn'>Sign in/Register</button>
    <div className='headerSearch'>
      <div className='headerSearchItem'>
        <i className='fa fa-bed headerIcon'/>
         <input type='text'
          placeholder="where are you going" 
          className="headerSearchInput" />
      </div>
      <div className='headerSearchItem'>
        <i className='fa fa-calender headerIcon'/>
         <span onClick={()=>setOpenDate(!openDate)}     className='headerSearchText'>{`${format(date[0].startDate, "MM/dd?yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
         {
          openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
          />
         }
      </div>
      <div className='headerSearchItem'>
        <i className='fa fa-person headerIcon'/>
         <span className='headerSearchText' onClick={()=>setOpenOptions(!openOptions)}>{`${adult} adult. ${children} children ${room} rooms`}</span>
      {
        openOptions && 
        <div className='options'>

        <div className='optionItem'>
          <span className='optionText'>Adult</span>
          <div className='optionCounter'>
          <button className='optionCounterButton' onClick={()=>handleClick('adult', 'd')} disabled={options.adult <=1}>-</button>
          <span className='optionCounterNumber'>{options.adult}</span>
          <button className='optionCounterButton' onClick={()=>handleClick('adult', 'i')} disabled={options.adult >=10}>+</button>
        </div>
        </div>

        <div className='optionItem'>
          <span className='optionText'>Children</span>
          <div className='optionCounter'>
          <button className='optionCounterButton'onClick={()=>handleClick('children', 'd')} disabled={options.adult <=1}>-</button>
          <span className='optionCounterNumber'>{options.children}</span>
          <button className='optionCounterButton' onClick={()=>handleClick('children','i' )} disabled={options.adult >=10}>+</button>
        </div>
        </div>
        <div className='optionItem'>
          <span className='optionText'>Room</span>
          <div className='optionCounter'>
          <button className='optionCounterButton' onClick={()=>handleClick('room','d' )} disabled={options.adult <=1}>-</button>
          <span className='optionCounterNumber'>{options.room}</span>
          <button className='optionCounterButton' onClick={()=>handleClick('room', 'i')} disabled={options.adult >=10}>+</button>
        </div>
        </div>
      </div>
      }

      <div className='headerSearchItem'>
      <button className='headerBtn'>Search</button>
         
      </div>
    </div>
    </div>
      </>
    }
    </div> </div>
  )
}

export default Header