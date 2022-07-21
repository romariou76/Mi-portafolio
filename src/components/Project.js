import "../css/project.css"
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

function Project(props){
    return(
        <div class="contenedor-projects">
        <a href="#d">
             <figure>
                 <img src="https://res.cloudinary.com/slee-dw/image/upload/v1597941457/meta-tutoriales_vbnc37.png"/>
                 <div class="capa">
                    <h3>PeepoApp</h3>
                    <p className="parrafo-capa" >Sitio Web para la venta de productos de segundo uso</p>
                    
                    <a href="#df" class="btn-capa">
                        <BiWorld style={{color: 'white', fontSize: '15px', paddingTop: '0px'}}/>
                        &nbsp;Website
                    </a>
                  
                    <a href="#df" class="btn-capa">
                         <AiFillGithub style={{color: 'white', fontSize: '15px', paddingTop: '0px'}}/>
                         &nbsp;Repository
                    </a>
                    
                 </div>
             </figure>
         </a>
     </div>
    )
}

export default Project;