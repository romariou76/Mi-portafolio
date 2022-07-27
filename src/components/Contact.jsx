import '../css/contact.css';
import emailjs from '@emailjs/browser';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Contact(){

// Envio de email usando la biblioteca emailJS
const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_813tp8a','template_gukm6ee',event.target,'PBJDkA0DtmrYbmBdr')
    .then(
        response =>
        Swal.fire(
            'Nice!',
            'Mensaje enviado correctamente',
            'success'
            )
        )
    .catch(
        error =>
        Swal.fire(
            'Noo!',
            'Ocurrio un problema al enviar el mensaje',
            'error'
          )
        )
   }
    return(

<div className='contact' id='contact-me'>
<div className="content">
<h1 className="logo">Contactame
     {/* <span>Us</span> */}
     </h1>

        <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
                <form onSubmit={sendEmail} id="formulario">

                    <p>
                        <label htmlFor="nombre" className="colocar_nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" required="obligatorio"/>
                    </p>
                    <p>
                        <label htmlFor="email" className="colocar_email">Email</label>
                        <input type="email" name="correo" id="email" required="obligatorio"/>
                    </p>
                    <p>
                        <label>Phone Number</label>
                        <input type="tel" name="phone" required="obligatorio"/>
                    </p>
                    <p>
                        <label>Asunto</label>
                        <input type="text" name="asunto" required="obligatorio"/>
                    </p>
                    <p className="block">
                        <label htmlFor="mensaje" className="colocar_mensaje">Mensaje</label>                     
                        <textarea className="textarea" name="mensaje" id="mensaje" required="obligatorio"></textarea>				              
                    </p>

                    <p className="block">
                     <button type="submit" id="enviar" >Enviar</button>
                    </p>

                </form>
            </div>
            <div className="contact-info">
                <h4>Más Informacion</h4>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Arequipa</li>
                    <li><i className="fas fa-phone"></i>&nbsp; (+51)921331079</li>
                    <li><i className="fas fa-envelope-open-text"></i>&nbsp;&nbsp;romario91546@gmail.com</li>
                </ul>
                <br></br>
                <br></br>
                <br></br>
                <p className='frase'>"Mi mayor error es, probablemente, fijarme mucho en el talento de la gente y no en la personalidad. Pienso que es importante que las personas tengan un buen corazón."</p>
                  {/* <img className="email-svg" src={email} alt="email"/> */}

                {/* <p>romario.com</p> */}
            </div>
        </div>
    </div>
</div>
    )
}

export default Contact;