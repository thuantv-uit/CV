import './App.css';
import { Routes, Route } from "react-router"
import Navbar from './components/Navbar/Navbar.js';

// Importing components
import Tool from './components/Tool/Tool.js';
import Home from './components/Home/Home.js';
import Contact from './components/Contact/Contact.js';
import Detail from './components/Detail/Detail.js';
import Project from './components/Project/Project.js';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tool" element={<Tool />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail" element={<Detail />} />
            <Route path='project' element={<Project/>}/>
          </Routes>
          </div>
      </div>
  );
}

export default App;
