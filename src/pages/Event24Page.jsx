import React from 'react'
import Event24 from '../components/Event24';
import Performer24 from '../components/Performer24';
import MoreInfo24 from '../components/MoreInfo24';

const Event24Page = () => {
  return (
    <div className='event24page'>
      <header className="w-100 min-vh-100">
        <div className='event2024 w-100 min-vh-100'>
          <Event24 />  
          <Performer24 />
          <MoreInfo24 />
        </div> 
      </header>
    </div>
  )
}

export default Event24Page;
