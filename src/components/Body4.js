import React, {useState} from 'react'
import './Body4.css';
import chipBrain from "../assets/madisonGraduatePhoto.png"
import george from "../assets/george.JPG"


export default function Body4() {
    const openLink = (url) => {

        window.open(url, '_blank')
      };

  return (
    <div className='body4'>
      <div className='body4-paragraphHolder'>
        <h2 className='body4-pargaraphHeader'>About Me:</h2>
        <p className='body4-text'>My name is Madison Long, a Computer Science student at the University of California, Santa Barbara College of Engineering, actively seeking internships and full-time opportunities in Software Development. I have a passion for initiating personal projects that enhance my learning and solve real-world problems, such as developing this website with 100% original code and exploring innovative solutions.</p>
        <p className='body4-text'>I thrive on challenges and constructive feedback, and I am eager to bring my unique and thoughtful approach to every project I undertake. I value the “work hard, play hard” philosophy, enjoying both diligent work and shared experiences in team environments. My goal is to contribute ideas and adapt within the ever-evolving field of software engineering. Contact me using the links above if you have any questions.</p>
      </div>
      {/* <div className='body4-imageConatiner'>
        <img src={chipBrain} className='body4-image1'/>
        <img src={george} className='body4-image2'/>
      </div> */}
    </div>
  )
}
