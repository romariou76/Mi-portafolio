import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
