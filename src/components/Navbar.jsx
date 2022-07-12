import React from 'react';
import '../css/Navbar.css'


function Navbar(props){
    return(
<body>
  <nav>
    <input type="checkbox" id='check'></input>
    <label for="check" >
      <i className="fas fa-bars" id="btn"></i>
      <i className="fas fa-times" id="cancel"></i>
      </label>
    <ul className='ul-nav'>
      <li className='li-nav'><a href='#e'>Home</a></li>
      <li className='li-nav'><a href='#e'>About</a></li>
      <li className='li-nav'><a href='#e'>Services</a></li>
      <li className='li-nav'><a href='#e'>Contact</a></li>
      <li className='li-nav'><a href='#e'>Feedback</a></li>
    </ul>
  </nav>
</body>
    )
}

export default Navbar;