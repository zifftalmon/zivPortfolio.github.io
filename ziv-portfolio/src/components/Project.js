import projects from './Projects.json'

const Project = () => {
    return(
        <div>
            <h1>projects</h1>
            {
                projects.map(item => {
                    return(
                        <div>
                            <h1>{item.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Project