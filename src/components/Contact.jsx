import '../css/contact.css';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Contact(){

const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_813tp8a','template_gukm6ee',event.target,'PBJDkA0DtmrYbmBdr')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }


    return(

<div className='contact' id='contact-me'>
<div class="content">
<h1 class="logo">Contactame
     {/* <span>Us</span> */}
     </h1>

        <div class="contact-wrapper animated bounceInUp">
            <div class="contact-form">
                <form onSubmit={sendEmail}>

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
                        <input type="tel" name="phone"/>
                    </p>
                    <p>
                        <label>Asunto</label>
                        <input type="text" name="asunto" required="obligatorio"/>
                    </p>
                    <p class="block">
                        <label htmlFor="mensaje" className="colocar_mensaje">Mensaje</label>                     
                        <textarea className="textarea" name="mensaje" id="mensaje" required="obligatorio"></textarea>				              
                    </p>

                    <p class="block">
                     <button type="submit" id="enviar">Enviar</button>
                    </p>

                </form>
            </div>
            <div class="contact-info">
                <h4>Más Informacion</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Arequipa</li>
                    <li><i class="fas fa-phone"></i>&nbsp; (+51)921331079</li>
                    <li><i class="fas fa-envelope-open-text"></i>&nbsp;&nbsp;romario91546@gmail.com</li>
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