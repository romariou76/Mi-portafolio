import '../css/skills.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Skills(){
    return(
<div className='main-skill' id='skills'>
    <div className='filtro-skills'>

    <h1 className='title-skill' data-aos="fade-up" data-aos-duration="3000">My Skills</h1>
    <p className='rayita' data-aos="fade-up" data-aos-duration="3000">_______________</p>
    <div className='Skills-body' data-aos="fade">
        <div className='caja-skill'>
            <div class="Skills" data-aos="fade-up"
                            data-aos-duration="3000">
                <h1 className='body-h1'>Coding Skills</h1><u className='rayita'>________________________</u>
                    <p className='info-skill1'>Actualmente tengo estos porcentajes de conocimiento en cada uno de estos lenguajes de programación
, todos estos los aprendo mayormente en internet, pues soy un joven muy autodidacta 8).

                    </p>
                <div className='title-skills'>
                    <p className='left-p'>Html</p>
                    <p className='right-html'>70%</p>
                </div>
                    <span className='bar1'><span className='html'></span></span>
                
                <div className='title-skills'>
                    <p className='left-p'>Css</p>
                    <p className='right-css'>50%</p>
                </div>
                    <span className='bar2'><span className='css'></span></span>
                    
                    <div className='title-skills'>
                    <p className='left-p'>Javascript</p>
                    <p className='right-js'>35%</p>
                </div>
                    <span className='bar4'><span className='javascript'></span></span>
                
                <div className='title-skills'>
                    <p className='left-p'>Python</p>
                    <p className='right-python'>30%</p>
                </div>
                    <span className='bar3'><span className='python'></span></span>
                    
                <div className='title-skills'>
                    <p className='left-p'>React</p>
                    <p className='right-react'>25%</p>
                </div>
                    <span className='bar5'><span className='react'></span></span>
                
                <div className='title-skills'>
                    <p className='left-p'>Node JS</p>
                    <p className='right-node'>25%</p>
                </div>
                    <span className='bar6'><span className='node'></span></span>
        </div>
        <div className='skill-foto'
        data-aos="fade-up"
        data-aos-duration="3000"
        >
            <h1 className='body-h1'>Social Skills</h1><u className='rayita'>______________________</u>
            <p className='info-skill1'>Quiero que conozcan como soy personalmente en cualquier ámbito de trabajo, 
            por ello he listado los valores, actitudes y habilidades sociales las cuales considero que tengo.
                </p>
                <br></br>
                <br></br>
                <ul className='Skill-ul'>
                  <ul className='Skill-ul2'>
                        <li>Atento</li>
                        <li>Responsable</li>
                        <li>Puntual</li>
                        <li>Disciplinado</li>
                        <li>Comprometido</li>
                    </ul>
                    <ul className='Skill-ul3'>
                        <li>Empatico</li>
                        <li>Asertivo</li>
                        <li>Credibilidad</li>
                        <li>Respetuoso</li>
                        <li>Mente abierta</li>
                    </ul>
                </ul>   
            </div>
        </div>
    </div>
    </div>

</div>
    )
}

export default Skills;