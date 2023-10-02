import React, {useState} from 'react'
import './Body2.css';
import '../App.css';

export default function Body2() {

 

    const openLink = (url) => {

      window.open(url, '_blank')
    };
  

  return (
    <div className='body2'>
       <h1 className='body2-banner'>College of Engineering Schedule Planner</h1>
        <div className='body2-container'>
            
           
            <div className='body-textContainer'>
                
                <h3 className='body2-description'>Description: </h3>
                <ul className='ul'>
                  <li className='body2-textBox'>This project allows UC Santa Barbara College of Engineering students to view the full course catalog and major requirements with the option to make a detailed, color coded prerequisite tracking course calendar for their experience at UCSB .   </li>
                  <li className='body2-textBox'><span className='white'>Deployed and in use by students</span></li>
                  <li className='body2-textBox'>(As such it requires a UCSB email authentication to log in)</li>
                  <li className='body2-textBox3'>Ask me for a detailed tour of the site! </li>
                  
                </ul>
               
            </div>
            <button className='body2-button' 
                                          onClick={() => openLink('https://fourysp.onrender.com')}> 
                                          Click to access College of Engineering Schedule Planner</button>
          
        </div>
    </div>
  )
}
