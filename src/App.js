import './App.css';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      <Perfil/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;