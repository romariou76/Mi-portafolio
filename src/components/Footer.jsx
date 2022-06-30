import React from 'react';
import '../css/footer.css'

function Footer(props){
    return(
<div className='footer'>
    <div className='footer-1'>
        <h3>TOURS</h3>
        <a href='#a'>All Events</a>
        <a href='#a'>Europe</a>
        <a href='#a'>North America</a>
    </div>
    <div className='footer-1'>
        <h3>MUSIC</h3>
        <a href='#a'>All Music</a>
        <a href='#a'>2022</a>
        <a href='#a'>2021</a>
        <a href='#a'>2020</a>
        <a href='#a'>2019</a>
        <a href='#a'>2018</a>
    </div>
    <div className='footer-1'>
        <h3>SHOP</h3>
        <a href='#a'>Go to Shop</a>
        <a href='#a'>Signature collection</a>
        <a href='#a'>Capsule collection</a>
        <a href='#a'>Festival flag</a>
        <a href='#a'>Kids</a>
         <a href='#a'>Accessories</a>
    </div>
    <div className='footer-1'>
        <h3>CONTACT</h3>
        <a href='#a'>Contact Us</a>
        <a href='#a'>STMPD RCRDS</a>
        <a href='#a'>STMPD STUDIOS</a>
    </div>
</div>
    )
}

export default Footer;