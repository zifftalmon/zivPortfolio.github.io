const Contact = () => {
    return (
        <div id='contact' className="contact">
            <div className="contactContainer">
                <h1>Ziv Talmon</h1>
                <hr/>
                <h4>Web Developer</h4>
                <div className="contactDetailsDiv">
                    <div>
                        <img className='contact-img' alt='contact-img' src='WhatsApp Image 2023-01-03 at 15.54.19.jpeg'/>
                    </div>
                    <div className="contactDiv">
                        <h2>23 Years old</h2>
                        <h2>Based in Jeruslaem</h2>
                        <h2>zivtalmon89@gmail.com</h2>
                        <h3>Social Networks Links:</h3>
                    </div>
                </div>
                <ul>
                    <li><a href='https://www.facebook.com/ziv.talmon' target='_#'><img alt='facebook-icon' src='icons8-facebook-50.png'></img></a></li>
                    <li><a href='https://github.com/zifftalmon' target='_#'><img alt='github-icon' src='icons8-github-50.png'></img></a></li>
                    <li><a href='https://www.linkedin.com/in/ziv-talmon-56b256233/' target='_#'><img alt='linkedin-icon' src='icons8-linkedin-circled-50.png'></img></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact