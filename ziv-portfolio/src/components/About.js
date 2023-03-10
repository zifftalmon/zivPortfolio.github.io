const About = () => {
    return(
        <div id='about' className="about">
            <div className="aboutPara">
                <h1>A Little About Myself</h1>
                <br/>
                <p>
                    Starting as an independent student, my goal was to accumulate the required knowledge to becomew an experienced web-developer in order to create exciting new projects for small businesses and big companies alike.
                    <br/>
                    My goal is to help my client's achieve the product they envision in order to develope their brand
                </p>
            </div> 
            <div className="imgDiv">
                <img alt='about-img' src='WhatsApp Image 2023-01-29 at 21.48.00 (1).jpeg'/>
                <div className="imgDivPara">
                    <p>
                        I consider my job to help you to envision, perfect and execute your ideas in terms of online marketing, designing and advertising, as well as create stunning and immersive websites for consumers to enjoy and be influenced by.
                        <br/>
                        To Reach this goal, my approach is to ideate together with my client, from their vision/dream, through drafting of the project and up until to the deployment of the project, keeping track of how it evolves over time.
                    </p>
                        <h3>Services</h3>
                    <ul>
                        <li>Web & UI Design<img alt='web-icon' src='icons8-web-50.png'/></li>
                        <li>Front-End Developemnet<img alt='front-end-icon' src='icons8-source-code-50.png'/></li>
                        <li>UX Design<img alt='ux-icon' src='icons8-ux-design-66.png'/></li>
                    </ul>
                </div>
            </div>   
        </div>
    )
}

export default About