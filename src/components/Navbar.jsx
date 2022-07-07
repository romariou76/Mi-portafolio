import React from 'react';
import '../css/Navbar.css'
import Perfil from './Perfil';

function Navbar(props){
    return(
<div class="body-nav">

    <nav>
      <div className='logo'>Web Developer</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li> <a href="#about-me">Sobre mi</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact-me">Contactame</a></li>
      </ul>
    </nav>

      <Perfil/>

  <section></section>
</div>
    )
}

export default Navbar;