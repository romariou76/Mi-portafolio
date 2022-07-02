import '../css/aboutme.css'
import garrix from '../images/garrix.jpg';

function Aboutme(){
    return(
        <div class="about">
  <div class="caja">
    <div class="about2">
      <img class="foto2" src={garrix} alt="perfil"/>
    </div>
      <div class="about3">
        <h1>Sobre mi:</h1>
        <u className='rayita-aboutme'>________________</u>
        <br/>
        <br/>
        <p>hola mi nombres es Romario.
          Soy un desarrollador Web Frontend que actualmente estudia Ing de Software en SENATI. 
          Siempre he sido una persona positiva, responsable y disciplinada y social. Cuando descubri 
          el diseño Web en SENATI, me di cuenta que es mi pasion.   </p><br/>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet sint maxime tempore nostrum distinctio in laudantium illo saepe quos</p> */}
        <br/>
        <a href="#a" class="boton1">Here Me</a>
        <a href="#a" class="boton2">Download CV</a>
  </div>
</div>
</div>
    )
}

export default Aboutme;