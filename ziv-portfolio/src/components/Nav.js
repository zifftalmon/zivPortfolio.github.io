import { Link, Routes,Route, useLocation } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Project from "./Project"
const Nav = () => {
    const location = useLocation()
    console.log(location.pathname);
    // console.log(window);
    return (
        <div>
            <div className='nav'>
                <h1><Link style={{textDecoration:'none', color:'black'}} to='/'>Ziv Talmon</Link></h1>
                <ul>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/projects'>Projects</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/about'>About</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Project/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default Nav