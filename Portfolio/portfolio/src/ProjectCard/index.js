import React, { useState, useEffect } from 'react'
import Card from './Card'
import ProjectInfo from './ProjectInfo'
import CoverImg from './CoverImg'
import styles from './ProjectCard.module.css'

export default function ProjectCard(props){
    const [isHovering, setIsHovering] = useState(false);
    const [position, setPosition] = useState({
        x: "",
        y: "",
    });

    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [])

    const project = props.project
    return (
        <div>
        <Card>
             <div 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                 <ProjectInfo title={project.title} description={project.description}/>
             </div>
        </Card>
        <CoverImg imgSrc={project.imgSrc} isHovering={isHovering} position={[position.x, position.y]}/>
        </div>
        
    )
    
}
