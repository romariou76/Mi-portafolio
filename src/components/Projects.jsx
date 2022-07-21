import '../css/projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Projects(){
    return(
<div className='main' id='projects'>
  <div data-aos="fade-up" data-aos-duration="3000">
      <h1 className='titulo'>Proyectos</h1>
      <p className='u'>________________</p>
      <p className='parrafo'>Ultimos proyectos realizados</p>
  </div>

<div class="proyectos" data-aos="fade-up" data-aos-duration="3000">
    <div class="proyectos-grid">
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        <div class="proyecto"></div>
        {/* <div class="proyecto"></div> */}
        {/* <div class="proyecto"></div> */}
      </div>
    </div>
</div>
    )
}

export default Projects;