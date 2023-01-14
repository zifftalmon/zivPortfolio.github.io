import Nav from './components/Nav';
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Project from "./components/Project"
import './App.css';
import './styles/Nav.css'
import './styles/Home.css'
import './styles/About.css'
import './styles/Project.css'
import './styles/Contact.css'




function App() {
  return (
      <div className="App">
        <Nav/>
        <Home/>
        <Project/>
        <About/>
        <Contact/>
      </div>
  );
}

export default App;
