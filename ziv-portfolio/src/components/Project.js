import projects from './Projects.json'

const Project = () => {
    return(
        <div id='projects' className='projectContainer'>
            <div className='projectPara'>
                <h1>My Work</h1>
                <p>
                In my designs is strive to create a comfortable, well-thought design and UI, one that is both effective and powerful in terms of movement throughout the website/app and in compatibility both the client's and the users' needs, whether they be a mobile app, a stunning website or a simple one-paged document.
                <br/><br/>    
                In order to bring to you the most modern and relevant designs I research in accordance to changing tyrends and to your specefic requirements
                </p>
            </div>
            <div className='projectGrid'>
            {
                projects.map((project,i) => {
                    return(
                            <div key={i} className={`project${i}`}>
                                <div className={`project${i}Header`}>
                                    <h1>{project.name}</h1>
                                    <h3>{project.tools}</h3>
                                </div>
                                <div className={`project${i}Link`}>
                                    <h2><a href={project.demo} target='#'>🔗 Demo</a></h2>
                                    <h2><a href={project.repository} target='#'>&lt;/&gt; Repo</a></h2>
                                </div>
                            </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Project