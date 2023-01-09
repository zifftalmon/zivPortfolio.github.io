import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {HashRouter} from 'react-router-dom'
import './styles/Nav.css'
import './styles/Home.css'
import './styles/About.css'
import './styles/Footer.css'
import './styles/Project.css'
import './styles/Contact.css'




function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav/>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
