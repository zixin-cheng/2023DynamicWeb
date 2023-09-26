import React from 'react'
import RecipeCard from './RecipeCard'
import {RECIPE_LIST} from './RecipeCard/recipe-data'
import styles from './RecipeCard/RecipeCard.module.css'

function App() {
    return(
        <div className={styles.content_wrapper}>
            <h1>Dynamic Web Recipes</h1>

            {RECIPE_LIST.map((recipe, index) => (
                <RecipeCard recipe={recipe} key={index}/>
            ))}
        </div>
    )
}

export default App