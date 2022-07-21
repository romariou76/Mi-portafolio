import React from 'react';
import '../css/footer.css'

import instagram from '../svg/instagram.png';
import youtube from '../svg/youtube.png';
import spotify from '../svg/spotify.png';
import facebook from '../svg/facebook.png';
import tiktok from '../svg/tiktok.png';
import twiter from '../svg/twiter.png';
import whatsapp from '../svg/whatsapp.png';

function Footer(props){
    return(
<div className='footer'>
  <div className='botones-inicio' >
{/* Agregando animaciones a los botones */}
    <div data-aos="fade-left">
      <a href="#about-me" className='btn-enlace'>ABOUT</a>
    </div>
    <div data-aos="fade-left">
      <a href="#projects" className='btn-enlace'>PROJECTS</a>
    </div>

    <div data-aos="fade-right">
      <a href="#contact-me" className='btn-enlace'>CONTACT</a>
    </div>
    <div data-aos="fade-right">
      <a href="#skills" className='btn-enlace'>SKILLS</a>
    </div>

  </div>
  

  <div className='Follow-me'>
  <p className='Follow-h1'>Follow Me</p>
  

<div className='Follow-footer'>
 <div className='Follow-container'>
        <div className='follow_icons'>
          <a href='https://www.instagram.com/romario_0304/' target='_blank' rel="noopener noreferrer">
          <img class="foto_follow" src={instagram} alt="instagram"/>
          </a>
        </div>
        <div className='follow_icons'>
        <a href='https://www.youtube.com/channel/UCA2nHp2r5czagmJswhZYUhQ/videos' target='_blank' rel="noopener noreferrer">
          <img class="foto_follow" src={youtube} alt="youtube"/>
        </a>
        </div>
        <div className='follow_icons'>
          <a href='https://open.spotify.com/user/lixoj5sqhcut5c52pc7he2763?si=UNERXt7mRu69yReuzAmgUg&utm_source=copy-link'>
          <img class="foto_follow" src={spotify} alt="spotify"/>

          </a>
        </div>
        <div className='follow_icons'>
          <a href='https://wa.me/51900151546?text=Hola%20me%20gustaria%20conocer%20mas%20de%20ti%20para%20trabajar' target='_blank' rel="noopener noreferrer">
          <img class="foto_follow" src={facebook} alt="facebook"/>
          </a>
        </div>
        <div className='follow_icons'>
          <img class="foto_follow" src={tiktok} alt="tiktok"/>
        </div>
        <div className='follow_icons'>
          <a href='https://twitter.com/Charmilion8' target='_blank' rel="noopener noreferrer">
          <img class="foto_follow" src={twiter} alt="twiter"/>
          </a>
        </div>
        <div className='follow_icons'>
          <a href='https://wa.me/51900151546?text=Hola%20me%20gustaria%20conocer%20mas%20de%20ti%20para%20trabajar' target='_blank' rel="noopener noreferrer">
          <img class="foto_follow" src={whatsapp} alt="snapchat"/>
          </a>
        </div>
        {/* <div className='follow_icons'>
          <img class="foto_follow" src={aple} alt="aple"/>
        </div> */}
        
    </div>
    <p className='Follow-p'>Copyright © 2022 Mejorando dia a dia / Desarrollado por Romario</p>

    <div className=''>
      </div>
  </div>

  </div>
</div>

    )
}

export default Footer;