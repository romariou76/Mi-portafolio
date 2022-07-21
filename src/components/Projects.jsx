import '../css/projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Projects(){
    return(
<div className='main' id='projects' data-aos="zoom-in" >
  <h1 className='titulo'>Proyectos</h1>
  <p className='u'>________________</p>
  <p className='parrafo'>Ultimos proyectos realizados</p>
<div class="proyectos" >
    <div class="proyectos-grid">
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
      </div>
    </div>
</div>
    )
}

export default Projects;