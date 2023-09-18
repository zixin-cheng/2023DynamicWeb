import React from 'react'
import {RECIPE} from './recipe-data'
import RecipeInfo from './RecipeInfo'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import './recipecard.css'

export default function RecipeCard(){

  return (
    //Empty div
    <>
    <Card>
    <RecipeImage title={RECIPE.imgSrc}/>

    <RecipeContent>
    <RecipeInfo title={RECIPE.title} description={RECIPE.description}/>

    <RecipeDetail>
    <IngredientsList ingredients={RECIPE.ingredients}/>
    <InstructionsList instructions={RECIPE.instructions}/>
    </RecipeDetail>

    </RecipeContent>
    </Card>
    </>
  )
}

function Card (props) {
    return <div className="card">{props.children}</div>
}

function RecipeImage (props) {
    const {imgSrc} = props
    return(
        <img src={RECIPE.imgSrc} alt="Kaya toast" className="img"/>
    )
}

function RecipeContent (props) {
    return <div className="recipe-content">{props.children}</div>
}

function RecipeDetail (props) {
    return <div className="recipe-detail">{props.children}</div>
}