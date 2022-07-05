import '../css/contact.css'

function Contact(){
    return(
        <div className="Contact-base">
            <div className="formulario">
                {/* <div className="form-info">
                    <img className='foto' src='#foto' alt='foto'></img>
                </div> */}
                <h1 className='form-titulo'>Contactame</h1>
                <br></br>
                <br></br>
                    <form action='https://formsubmit.co/romario91546@gmail.com' method='post'>

	    			    <label for="nombre" class="colocar_nombre">Nombre</label>
	    			    <input type="text" name="nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
                
	    			    <label for="email" class="colocar_email">Email</label>
	    		        <input type="email" name="correo" id="email" required="obligatorio" placeholder="Escribe tu Email"/>

				        <label for="mensaje" class="colocar_mensaje">Mensaje</label>                     
       		            <textarea name="mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea>				              
                        
                        <button classname="form-button" type="submit" id="enviar"><p className='button-p'>Enviar</p></button>
                        <input type="hidden" name="_next" value="http://localhost:3000/" ></input>
                        <input type="hidden" name='_captcha' value="false"></input>
                    </form>
                </div>
            </div>
    )
}

export default Contact;