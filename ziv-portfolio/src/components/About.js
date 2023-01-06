const About = () => {
    return(
        <div>
            {/* HEADER */}
            <section>
                <div className="details">
                    <div className="contact">
                        <img src='WhatsApp Image 2023-01-03 at 15.54.19.jpeg'></img>
                        <div>
                            <h4>054-7564972</h4>
                            <h4>Living in Jerusalem</h4>
                            <h4>23 Years Old</h4>
                            <h4>zivtalmon89@gmail.com</h4>
                        </div>
                    </div>
                    <div className="intro">
                        <h1>Ziv Talmon</h1>
                        <hr/>
                        <h2>Full-Stack Developer</h2>
                    </div>
                </div>
            </section>
            {/*EXPERIENCE SECTION */}
            <section>
                <div className="education">
                    <h1>Education</h1>
                    <ul>
                        <h6>2012-2018:</h6>
                        <li>Charles E. Smith High School for the Arts in jerusalem, Theater Major</li>
                        <h6>2022</h6>
                        <li>Developers Institute Full-Stack JavaScript Bootcamp</li>
                    </ul>
                    <h1>Work Experience</h1>
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
        </div>
    )
}

export default About