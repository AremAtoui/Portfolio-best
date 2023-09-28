import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Navbarre from './Components/Navbarre';

function App() {
  return (
    <div >
     
  <Navbarre/>

     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/portfolio" element={ <Portfolio/> } />
      </Routes>
   
  
    </div>
  );
}

export default App;
