import React, {useState} from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faEarthAmerica} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Swup from 'swup';
const swup = new Swup();


export default function Navbar({setSelectedPage}) {



  const handleNavClick = (content) => {
    setSelectedPage(content)
    setActiveLink(content)
  }

  const openLink = (url) => {
    window.open(url, '_blank')
  };

  const [active, setActive] = useState('nav_menu');
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const [activeLink, setActiveLink] = useState('home');

  const navToggle = () => {
    active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');
    toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler');
  };

  const handleActiveClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="nav">
      <div className='nav-leftItems'>
          <FontAwesomeIcon icon= {faEarthAmerica} className='nav-earthIcon' onClick={ () => handleNavClick('home')}/>
          <a href="#" className="nav_brand"  onClick={() => openLink("https://www.16personalities.com/enfj-personality") }> Madison Zucca Long</a>
      </div>
      
        <ul className={active}>
            {/* <li className='nav_item'> <a href="#" className="nav_link">Home</a> </li> */}
            <li className='nav_item'> <a href="#" className={`nav_link ${activeLink === 'home' ? 'active' : ''}`} onClick={ () => handleNavClick('home')}>Home</a> </li>
            <li className='nav_item'> <a href="#" className={`nav_link ${activeLink === 'Engineering Calandar' ? 'active' : ''}`} onClick={ () => handleNavClick('Engineering Calandar')}>Engineering Calandar</a> </li>
            <li className='nav_item'> <a href="#" className={`nav_link ${activeLink === 'Practice Websites' ? 'active' : ''}`} onClick={ () => handleNavClick('Practice Websites')}>Practice Websites</a> </li>
            <li className='nav_item'> <a href="#" className={`nav_link ${activeLink === 'About' ? 'active' : ''}`} onClick={ () => handleNavClick('About')}>About</a></li>
            {/* <li className='nav_item'> <a href="#" className="nav_link">Contact</a> </li> */}
            <div className='nav-socialMediaContainer'>
              <a href="https://www.linkedin.com/in/madison-long-92500314b/" target='_blank'> <FontAwesomeIcon icon= {faLinkedin} className="nav-mediaIconLinkedin"/> </a>
              <a href="https://www.facebook.com/madison.long.564?mibextid=9R9pXO" target='_blank'> <FontAwesomeIcon icon= {faFacebook} className="nav-mediaIconFacebook"/> </a>
              <a href="https://www.instagram.com/madisonzucca/" target='_blank'> <FontAwesomeIcon icon= {faInstagram} className="nav-mediaIconInstagram"/> </a>
              <a href="mailto:madison_long@ucsb.edu" target='_blank'> <FontAwesomeIcon icon= {faEnvelope} className="nav-mediaIconEmail"/> </a>
              
             </div> 
        </ul>
        <div class="animation start-home"></div>
        <div className={toggleIcon} onClick={navToggle}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    </nav>
  )
}
