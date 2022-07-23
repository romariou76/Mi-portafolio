import '../css/aboutme.css'
import mono from '../images/mono.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Aboutme(){
    return(
<div className="about" id='about-me' data-aos="fade" data-aos-duration="1000">
  <div className='filtro-about'>
    <div className="caja">
    <div className="about2" data-aos="fade-up" data-aos-duration="1000">
      <img className="foto2"   src={mono} alt="perfil"/>
    </div>
    <div className="about3" data-aos="fade-up" data-aos-duration="1000">
        <h1 className='About-me'>About me</h1>
        <u className='rayita-aboutme'>________________</u>
        <p className='about-info'>
          Soy un desarrollador Web Frontend que actualmente estudia Ing de Software en SENATI. 
          Me caracterizo por ser una persona positiva, responsable, disciplinada y social. Cuando descubri 
          el mundo del diseño Web en Internet, supe que ese era camino como profesional.   </p><br/>
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
          <li>921331079</li>
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
</div>
    )
}

export default Aboutme;