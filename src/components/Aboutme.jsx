import '../css/aboutme.css'
import mono from '../images/mono.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cv from "../downloads/curriculum.pdf"

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
        <h1 className='About-me'>Sobre mi</h1>
        <u className='rayita-aboutme'>________________</u>
        <p className='about-info'>
          Soy un desarrollador web principiante que actualmente estudia Ing de Software en SENATI. 
          Me caracterizo por ser una persona positiva, responsable, disciplinada y social. Cuando descubri 
          el mundo del desarrollo Web en Internet, supe que era el camino perfecto para ser un profesional.   </p><br/>
        <ul className='About-ul'>
          <ul className='About-ul2'>
            <li>Nombre:</li>
            <li>Email:</li>
            <li>Telefono:</li>
            <li>Cumpleaños:</li>
            <li>Nacionalidad:</li>
            <li>Direccion:</li>
          </ul>
          <ul className='About-ul3'>
            <li>Romario</li>
            <li>romario91546@gmail.com</li>
            <li>921331079</li>
            <li>20 de abril</li>
            <li>Peruano</li>
            <li>A.S.A. Arequipa</li>
          </ul>
        </ul>
    
        <br/>
        {/* <a href="#a" className="boton1">Here Me</a> */}
        <a href={cv} target='_blank' className="buttonDownload" rel="noopener noreferrer">Descargar CV</a>

    </div>
  </div>
  
  </div>
</div>
    )
}

export default Aboutme;