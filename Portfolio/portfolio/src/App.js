import React from 'react'
import ProjectCard from './ProjectCard'
import {PROJECT_LIST} from './ProjectCard/project-data'
import styles from './ProjectCard/ProjectCard.module.css'

function App() {
    return(
        <div>
            <h1>Jane Cheng</h1>
            <div className={styles.content_wrapper}>
                

                {PROJECT_LIST.map((project, index) => (
                    <ProjectCard project={project} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default App