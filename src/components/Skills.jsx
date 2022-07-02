import '../css/skills.css'

function Skills(){
    return(
<div className='body-skill'>
<div class="skills">
    <h1 className='body-h1'>My Skills</h1><u className='rayita'>_______________</u>

    <li><h3 className='body-h3'>Html</h3>
        <span className='bar1'><span className='html'></span></span>
    </li>
    <li><h3 className='body-h3'>Css</h3>
        <span className='bar2'><span className='css'></span></span>
    </li>
    <li><h3 className='body-h3'>Php</h3>
        <span className='bar3'><span className='php'></span></span>
    </li>
    <li><h3 className='body-h3'>Javascript</h3>
        <span className='bar4'><span className='javascript'></span></span>
    </li>
    
</div>
</div>
    )
}

export default Skills;