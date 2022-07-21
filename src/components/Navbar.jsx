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
      <h1>RomaCode</h1>
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