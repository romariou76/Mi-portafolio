import garrix from '../images/garrix.jpg';
import '../css/skills.css'

function Skills(){
    return(
<div className='Skills-body'>
    <div className='caja-skill'>
        <div class="Skills">
            <h1 className='body-h1'>My Skills</h1><u className='rayita'>_______________</       u>
            <h3 className='body-h3'>Html</h3>
                <span className='bar1'><span className='html'></span></span>
            <h3 className='body-h3'>Css</h3>
                <span className='bar2'><span className='css'></span></span>
            <h3 className='body-h3'>Python</h3>
                <span className='bar3'><span className='php'></span></span>
            <h3 className='body-h3'>Javascript</h3>
                <span className='bar4'><span className='javascript'></span></span>
            <h3 className='body-h3'>React</h3>
                <span className='bar4'><span className='javascript'></span></span>
            <h3 className='body-h3'>Node JS</h3>
                <span className='bar4'><span className='javascript'></span></span>
    </div>
        <div className='skill-foto'>
            <img className='foto' src={garrix} alt="perfil"/>
        </div>
    </div>
</div>
    )
}

export default Skills;