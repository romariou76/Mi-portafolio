import React from 'react';
import '../css/projects.css'
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Projects(props){
    return(
<div className='main' id='projects'>
    <div className='filtro-projects'>
        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className='titulo'>Proyectos</h1>
          <p className='u'>________________</p>
          <p className='parrafo'>Mis proyectos realizados</p>
        </div>

        <div className="proyectos" data-aos="fade-up" data-aos-duration="3000">
            <div className="proyectos-grid">
                <Project
                nombre='PeepoApp'
                info='Sitio Web para la venta de productos de segundo uso'
                imagen='peepoapp'
                url='https://github.com/w4xccino/peepo-app.git'
                />
                
                <Project
                nombre='CityTours'
                info='Conozca bellos y hermosos lugares turisticos del Perú.'
                imagen='citytours'
                web='https://citytours.netlify.app/'
                url='https://github.com/romariou76/Sitio-Web-de-turismo.git'
                />

                <Project
                nombre='Proximamente'
                info='proximamente'
                imagen='proximamente'
                />

                <Project
                nombre='Proximamente'
                info='proximamente'
                imagen='proximamente'
                />

                <Project
                nombre='Proximamente'
                info='proximamente'
                imagen='proximamente'
                />

                <Project
                nombre='Proximamente'
                info='proximamente'
                imagen='proximamente'
                />
               

            </div>
        </div>
    </div>
</div>
    )
}

export default Projects;