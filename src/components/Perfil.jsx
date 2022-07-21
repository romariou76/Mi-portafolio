import '../css/Perfil.css'

function Perfil(){
    return(

<div class="principal">
  {/* <img className="fondo" src={fondo} alt="perfil"/> */}
    <div class="contenedor">
    <p className='hello'>----HELLO----</p>
      <div className='cont-nombre'>
        <h1 class="nombre">I'm</h1><h1 className='nombre2'>Romario</h1>
      </div>
        <p>
          This is Romario, visual designer, Web Developer and Creative Director
          located in Peru, looking for working around the globe.
        </p>
    </div>
</div>
    )
}

export default Perfil;