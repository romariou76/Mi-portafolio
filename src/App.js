import './App.css';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      <Perfil/>
      <Aboutme/>
      <Projects/>
    </div>
    </div>
  );
}

export default App;
