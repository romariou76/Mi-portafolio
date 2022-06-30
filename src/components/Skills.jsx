import '../css/skills.css'
import html from '../images/icons/html.png';
import css from '../images/icons/css.png';
import js from '../images/icons/js.png';
import python from '../images/icons/python.png';
import react from '../images/icons/react.png';
import mysql from '../images/icons/mysql.png';
import git from '../images/icons/git.png';
import node from '../images/icons/node.png';
import tailwind from '../images/icons/tailwind.png';
import vscode from '../images/icons/vscode.png';


function Skills(){
    return(
<div class="skills">
<div className='skill-info2'>
<div className='skill-info'>
    <h2 className='title'>Mis Skills</h2>
    <p className='info-skill'>Estos son las tecnologias en las que me he especializado de manera autodidacta y por enseñanza.
        Siempre me gusto aprender nuevas cosas y hacer experimentos con ellas.
    </p>
</div>
</div>
  <div class="grid">
      <div className="skill"><img className="foto" src={html} alt="html"/><h3>Html</h3></div>   
      <div className="skill"><img className="foto" src={css} alt=""/><h3>Css</h3></div>
      <div className="skill"><img className="foto" src={js} alt=""/><h3>Javascript</h3></div>
      <div className="skill"><img className="foto" src={python} alt=""/><h3>Python</h3></div>
      <div className="skill"><img className="foto" src={react} alt=""/><h3>React</h3></div>
      <div className="skill"><img className="foto" src={mysql} alt=""/><h3>MySql</h3></div>
      <div className="skill"><img className="foto" src={node} alt=""/><h3>Node JS</h3></div>
      <div className="skill"><img className="foto" src={git} alt=""/><h3>Git</h3></div>
      <div className="skill"><img className="foto" src={tailwind} alt=""/><h3>Tailwind</h3></div>
      <div className="skill"><img className="foto" src={vscode} alt=""/><h3>Visual Studio Code</h3></div>


  </div>

</div> 
    )
}

export default Skills;