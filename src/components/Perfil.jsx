import '../css/Perfil.css'
import perfil from '../images/perfil.png';
function Perfil(){
    return(

<div class="principal">
    <div class="contenedor">
      <div class="contenedor2">
          <img class="foto" src={perfil} alt="perfil"/>
      </div>
        <div class="info">
          <p class="p">Hola, mi nombre es</p>
          <h1 class="nombre">Romario Quispe Hancco</h1>
          <h1 class="info2">Front-end Developer</h1>
          <br/>
          <p>Desarrollo de sitios y aplicaciones web, así como aplicaciones móviles multiplataforma.</p>    
        </div>
    </div>
</div>

    )
}

export default Perfil;