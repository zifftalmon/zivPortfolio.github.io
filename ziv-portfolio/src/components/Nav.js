const Nav = () => {
    return (
        <div>
            <div className='nav'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#about'>About</a></li>
                    <li> <a href='#contact'>Contact</a></li>
                </ul>
                    <div>
                        <ul>
                            <li><a href='https://www.facebook.com/ziv.talmon' target='_#'><img alt='facebook-icon' src='icons8-facebook-50.png'></img></a></li>
                            <li><a href='https://github.com/zifftalmon' target='_#'><img alt='github-icon' src='icons8-github-50.png'></img></a></li>
                            <li><a href='https://www.linkedin.com/in/ziv-talmon-56b256233/' target='_#'><img alt='linkedin-icon' src='icons8-linkedin-circled-50.png'></img></a></li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Nav