import React from 'react';
import "../css/project.css"
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

function Project(props){
    return(
        <div className="contenedor-projects">
             <figure>
             <img
                src={require(`../images/${props.imagen}.png`)} //plantillas literales
                    alt='Foto-peepoapp'/>
                 <div className="capa">
                    <h3>{props.nombre}</h3>
                    <p className="parrafo-capa" >{props.info}</p>
                    
                    <a href={props.web} className="btn-capa">
                        <BiWorld style={{color: 'white', fontSize: '15px', paddingTop: '0px'}}/>
                        &nbsp;Website
                    </a>
                  
                    <a href={props.url} className="btn-capa">
                         <AiFillGithub style={{color: 'white', fontSize: '15px', paddingTop: '0px'}}/>
                         &nbsp;Repository
                    </a>
                    
                 </div>
             </figure>
     </div>
    )
}

export default Project;