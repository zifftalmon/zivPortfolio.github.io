import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom'
import './styles/Nav.css'
import './styles/Home.css'
import './styles/About.css'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
