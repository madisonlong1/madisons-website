import React, {useState} from 'react'
import './Body3.css';
import '../App.css';

export default function Body3() {

    const openLink = (url) => {

        window.open(url, '_blank')
      };


  return (
    <div className='body3'>
        
        <div>
            <h1 className='body3-topDescription'>These websites were developed/deployed for practice to improve my React Java Script skills</h1>
            <h3 className='body3-bottomDescription'>(More Websites coming soon)        </h3>
        </div>
        

        <div className='body1-buttonGroup'>
            <button className='body3-button' onClick={() => openLink("https://chipper-phoenix-18dbcc.netlify.app/") }> Website 1 </button>
            
        </div>
        <div className='body1-buttonGroup'>
            <button className='body3-button' onClick={() => openLink("https://650223d910f85c526cf66ace--luxury-queijadas-1e6c55.netlify.app/") }> Website 2 </button>
            
        </div>
    </div>
  )
}
