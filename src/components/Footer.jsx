import React from 'react';
import '../css/footer.css'

import instagram from '../svg/instagram.png';
import youtube from '../svg/youtube.png';
import spotify from '../svg/spotify.png';
import facebook from '../svg/facebook.png';
import tiktok from '../svg/tiktok.png';
import twiter from '../svg/twiter.png';
import snapchat from '../svg/snapchat.png';

function Footer(props){
    return(
<div className='footer'>
  <div className='botones-inicio'>
    <button className='btn-enlace'>HOME</button>
    <button className='btn-enlace'>ABOUT</button>
    <button className='btn-enlace'>PROJECTS</button>
    <button className='btn-enlace'>CONTACT</button>
    <button className='btn-enlace'>SKILLS</button>
  </div>

  <div className='Follow-me'>
  <p className='Follow-h1'>Follow Me</p>
  

<div className='Follow-footer'>
 <div className='Follow-container'>
        <div className='follow_icons'>
          <img class="foto_follow" src={instagram} alt="instagram"/>
        </div>
        <div className='follow_icons'>
          <img class="foto_follow" src={youtube} alt="youtube"/>
        </div>
        <div className='follow_icons'>
            <img class="foto_follow" src={spotify} alt="spotify"/>
        </div>
        <div className='follow_icons'>
          <img class="foto_follow" src={facebook} alt="facebook"/>
        </div>
        <div className='follow_icons'>
          <img class="foto_follow" src={tiktok} alt="tiktok"/>
        </div>
        <div className='follow_icons'>
          <img class="foto_follow" src={twiter} alt="twiter"/>
        </div>
        <div className='follow_icons'>
          <img class="foto_follow" src={snapchat} alt="snapchat"/>
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