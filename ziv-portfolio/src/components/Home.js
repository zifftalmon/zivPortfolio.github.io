import { Link } from "react-router-dom"
const Home = () => {
    return(
        <div>
            {/* <h1>Home</h1> */}
            <div className="homeIntro">
                        <h1>Hi!<br/>My name is Ziv</h1><br/>
                    <p>
                        I'm a full-stack developer based in Jerusalem,
                        <br/>
                        My goal is to help <u>YOU</u> with defining and creating powerful online experiences for your brand
                    </p>
                    <Link style={{textDecoration:'none', color:'black'}} to='/about'><button className="button">About Me</button></Link>
            </div>
            {/* <section>
                <div className="education">
                    <h1>Education 🎓</h1>
                    <ul>
                        <h6>2012-2018:</h6>
                        <li>Charles E. Smith High School for the Arts in jerusalem, Theater Major</li>
                        <h6>2022</h6>
                        <li>Developers Institute Full-Stack JavaScript Bootcamp</li>
                    </ul>
                    <h1>Work Experience 💼</h1>
                    <ul>
                        <h6>2017-2019</h6>
                        <li>waiter and executive in Luiza Catering company</li>
                        <h6>2021-2022</h6>
                        <li>Cook and Sous-Chef in the Pergamon restaurant in Jerusalem</li>
                        <h6>Present</h6>
                        <li>Bartender & Barista in the Miffal (a cultural center) in Jerusalem</li>
                    </ul>
                </div>
            </section>
    */}
        </div>
    )
}

export default Home