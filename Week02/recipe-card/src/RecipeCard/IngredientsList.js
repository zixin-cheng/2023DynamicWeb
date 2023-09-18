import React from 'react'

export default function IngredientsList(props){
    const {ingredients} = props
    return(
        <div>
        <h2>Ingredients</h2>
        <ul>
            {ingredients.map((i, index) => (
                <li key={index}>{i}</li>
            ))}
        </ul>
    </div>
    )
}