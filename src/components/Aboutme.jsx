import '../css/aboutme.css'
import garrix2 from '../images/garrix2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Aboutme(){
    return(
<div className="about" id='about-me'>
  <div className="caja">
    <div className="about2" data-aos="fade-down" data-aos-duration="1000">
      <img className="foto2"   src={garrix2} alt="perfil"/>
    </div>
    <div className="about3" data-aos="fade-up" data-aos-duration="2000">
        <h1 className='About-me'>About me</h1>
        <u className='rayita-aboutme'>________________</u>
        <p className='about-info'>
          Soy un desarrollador Web Frontend que actualmente estudia Ing de Software en SENATI. 
          Siempre he sido una persona positiva, responsable y disciplinada y social. Cuando descubri 
          el diseño Web en SENATI, me di cuenta que es mi pasion.   </p><br/>
        <ul className='About-ul'>
        <ul className='About-ul2'>
          <li>Name:</li>
          <li>Email:</li>
          <li>Phone</li>
          <li>Cumpleaños</li>
          <li>Nacionalidad</li>
          <li>Direccion</li>
        </ul>
        <ul className='About-ul3'>
          <li>Romario:</li>
          <li>roma@gmail.com</li>
          <li>94534634</li>
          <li>20 de abril</li>
          <li>Peruano</li>
          <li>Arequipa</li>
        </ul>
        </ul>
        
        <br/>
        <a href="#a" className="boton1">Here Me</a>
        <a href="#a" className="boton2">Download CV</a>
    </div>
  </div>

</div>
    )
}

export default Aboutme;