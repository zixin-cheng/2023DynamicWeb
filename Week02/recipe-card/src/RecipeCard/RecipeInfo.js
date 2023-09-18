import React from 'react'

export default function RecipeInfo(props){
    const {title} = props
    const {description} = props
    return(
        <div className='recipe-info'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

