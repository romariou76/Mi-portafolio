import '../css/Perfil.css'
import fondo from '../images/fondo5.jpg';

function Perfil(){
    return(

<div class="principal">
  <img className="fondo" src={fondo} alt="perfil"/>
    <div class="contenedor">
      <h1 class="nombre">HI, I'm Romario</h1>
      <br/>
      <p>Yo soy un Front-end Developer que desarrollo de sitios y aplicaciones web, así como aplicaciones móviles multiplataforma.</p>    
    </div>
</div>

    )
}

export default Perfil;