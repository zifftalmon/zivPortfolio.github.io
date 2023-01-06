import { Link, Routes,Route } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Projects from "./Projects"
const Nav = () => {
    return (
        <div>
            <div className='nav'>
                <h1><Link style={{textDecoration:'none', color:'black'}}>ziv portfolio</Link></h1>
                <ul>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/home'>Home</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/projects'>Projects</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/about'>About</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </div>
    )
}

export default Nav