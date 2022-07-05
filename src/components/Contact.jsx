import '../css/contact.css'

function Contact(){
    return(
        <div className="Contact-base">
            <div className="formulario">
                {/* <div className="form-info">
                    <img className='foto' src='#foto' alt='foto'></img>
                </div> */}
                    <h1>Contactome</h1>
				            <h3 className='form-h3'>Escríbeme y me pondre en contacto contigo</h3>
                    <form action='submit' method='post'>

                    <p className='form-p'>
	    			          <label for="nombre" class="colocar_nombre">Nombre</label>
	    			          <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
	    		          </p>
                
	    		          <p className='form-p'>
	    			          <label for="email" class="colocar_email">Email</label>
	    				        <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"/>
	    		          </p>

                    <p className='form-p'>
					            <label for="mensaje" class="colocar_mensaje">Mensaje</label>                     
               		    <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
               	    </p>	  								
			
				              <button classname="form-button" type="submit" name="enviar_formulario" id="enviar"><p className='button-p'>Enviar</p></button>
                    </form>
                </div>
            </div>
    )
}

export default Contact;