import React from 'react';
import "../css/project.css"
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

function Project(props){
    return(
        <div class="contenedor-projects">
        <a href="#d">
             <figure>
             <img
                src={require(`../images/${props.imagen}.png`)} //plantillas literales
                    alt='Foto-peepoapp'/>
                 <div class="capa">
                    <h3>{props.nombre}</h3>
                    <p className="parrafo-capa" >{props.info}</p>
                    
                    <a href="#df" class="btn-capa">
                        <BiWorld style={{color: 'white', fontSize: '15px', paddingTop: '0px'}}/>
                        &nbsp;Website
                    </a>
                  
                    <a href={props.url} class="btn-capa">
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