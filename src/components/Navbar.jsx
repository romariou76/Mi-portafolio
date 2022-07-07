import React from 'react';
import '../css/Navbar.css'
import Perfil from './Perfil';

function Navbar(props){
    return(
<div class="body-nav">

    <nav>
      <div className='logo'>Web Bignner</div>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li> <a href="Sobre mi">Sobre mi</a></li>
        <li><a href="Proyectos">Proyectos</a></li>
        <li><a href="Contactame">Contactame</a></li>
      </ul>
    </nav>

      <Perfil/>

  <section></section>
</div>
    )
}

export default Navbar;