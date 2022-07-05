import '../css/follow.css'
import aple from '../svg/aple.png';
import instagram from '../svg/instagram.png';
import youtube from '../svg/youtube.png';
import spotify from '../svg/spotify.png';
import facebook from '../svg/facebook.png';
import tiktok from '../svg/tiktok.png';
import twiter from '../svg/twiter.png';
import snapchat from '../svg/snapchat.png';

function Follow(){
    return(
<div className='Follow-body'>
<h1 className='Follow-h1'>Follow Me</h1>
{/* <h1 className='Follow-h1'>Romario</h1> */}
<p className='Follow-p'>Copyright © 2022 Mejorando dia a dia / Desarrollado por Romario</p>

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
        <div className='follow_icons'>
          <img class="foto_follow" src={aple} alt="aple"/>
        </div>

    </div>
</div>
    )
}

export default Follow;