import logo from './assets/logo.png';
import resume from './assets/Anakha_Resume.pdf';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="body">
        <nav>
            <img src={logo} className="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <a href={resume} target="_blank" className="btn">Resume</a>
        </nav>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </div>
    </Router>
        
  );
}

export default App;
