import garrix from '../images/garrix.jpg';
import '../css/skills.css'

function Skills(){
    return(
<div className='Skills-body'>
    <div className='caja-skill'>
        <div class="Skills">
            <h1 className='body-h1'>My Skills</h1><u className='rayita'>_______________</u>
                <p>Loream isam Mauris scelrisque ut ipsum id vulputate.
                    Nulla osaoret, liguia vel congue ultricies,nith ipsum.
                </p>
                <div className='title-skills'>
                    <p className='left-p'>Html</p>
                    <p className='right-html'>90%</p>
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
                    <p className='right-python'>40%</p>
                </div>
                    <span className='bar3'><span className='python'></span></span>
                    
                <div className='title-skills'>
                    <p className='left-p'>React</p>
                    <p className='right-react'>45%</p>
                </div>
                    <span className='bar5'><span className='react'></span></span>
                
                <div className='title-skills'>
                    <p className='left-p'>Node JS</p>
                    <p className='right-node'>30%</p>
                </div>
                    <span className='bar6'><span className='node'></span></span>
        </div>
        <div className='skill-foto'>
            <h1 className='body-h1'>Social Skills</h1><u className='rayita'>_______________</u>
            <p>Loream isam Mauris scelrisque ut ipsum id vulputate.
                Nulla osaoret, liguia vel congue ultricies,nith ipsum.
                </p>
                <br></br>
                <br></br>
                <ul className='Skill-ul'>
                  <ul className='Skill-ul2'>
                        <li>Atento</li>
                        <li>Responsable</li>
                        <li>Puntual</li>
                        <li>Disciplinado</li>
                        <li>Nacionalidad</li>
                        <li>Direccion</li>
                    </ul>
                    <ul className='Skill-ul3'>
                        <li>Romario</li>
                        <li>roma@gmail.com</li>
                        <li>94534634</li>
                        <li>20 de abril</li>
                        <li>Peruano</li>
                        <li>Arequipa</li>
                    </ul>
                </ul>   
        </div>
    </div>
</div>
    )
}

export default Skills;