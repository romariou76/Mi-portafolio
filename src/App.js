import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import Skill from './components/skill';
import Contact from './components/Contact';
// import Follow from './components/follow';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <div>
      {/* <Skill/> */}
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* <Follow/> */}
      <Footer/>
    </div>
    </div>
  );
}

export default App;
