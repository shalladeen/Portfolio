import './App.css';
import "@fontsource/comfortaa";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <Router>
     <Routes>
        <Route path ="/" element = {<Home />} />
        <Route path ="/projects" element = {<Projects />} />
        <Route path ="/about" element = {<About />} />
        <Route path ="/contact" element = {<Contact />} />
     </Routes>
   </Router>
  );
}

export default App;
