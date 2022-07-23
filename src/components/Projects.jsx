import '../css/projects.css'
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Projects(){
    return(
<div className='main' id='projects'>
    <div className='filtro-projects'>
        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className='titulo'>Proyectos</h1>
          <p className='u'>________________</p>
          <p className='parrafo'>Ultimos proyectos realizados</p>
        </div>

        <div class="proyectos" data-aos="fade-up" data-aos-duration="3000">
            <div class="proyectos-grid">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    </div>
</div>
    )
}

export default Projects;