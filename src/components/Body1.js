import React, {useState} from 'react'
import './Body1.css';
import '../App.css';
import logo from '../logo.svg';
import TECHNOLOGY from '../assets/TECHNOLOGY.png';
import aiPhoto from '../assets/aiPhoto.png';
import madisonGraduatePhoto from '../assets/madisonGraduatePhoto.png';
import protag from '../assets/protag.png'

export default function Body1() {
    const openLink = (url) => {

        window.open(url, '_blank')
        };

  return (
    <div className="body1">
        <header className="App-header">
            <div className='body_welcomeHolder'>
                <h1 className='body_welcome'>Welcome</h1>
                <h2 className='body_welcomeMessage'>Use the navigation above to learn about my Web-Development achievements and learn more about me! </h2>
            </div>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            
            {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a> */}
            <div className="body1-imageHolder">
                {/* <p>Click me</p> */}
                <img src={protag} className="body1-protag"  onClick={() => openLink("https://www.16personalities.com/enfj-personality") }/>
            </div>
        
        </header>

        
    </div>
  )
}
