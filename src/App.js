import './App.css';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      <Perfil/>
      <Aboutme/>
    </div>
    </div>
  );
}

export default App;
