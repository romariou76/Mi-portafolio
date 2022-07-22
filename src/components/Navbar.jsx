import '../css/Navbar.css'
import { useRef } from "react";
import {FaBars, FaTimes } from "react-icons/fa"
import Perfil from './Perfil';

function Navbar(props){

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

return(
<div className='NavBar'>
  <div className='filtro'>
    <header>
      
      <div class="spinner">
        <span>R</span>
        <span>O</span>
        <span>M</span>
        <span>C</span>
        <span>O</span>
        <span>D</span>
        <span>E</span>
      </div>

      <nav ref={navRef}>
        <a href='#home'>Home</a>
        <a href='#about-me'>About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact-me">Contact</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
    </header>
          <Perfil/>
  </div>
</div>

    )
}

export default Navbar;