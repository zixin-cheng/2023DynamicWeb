import {useState} from 'react'
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'
import styles from './RecipeCard.module.css'

export default function UserRating(){
    // array destructuring, this is a nice way to access a piece of state and its setting
    // count it the piece of state
    // setCount is the setter for count
    // useState defines the initial count at 0, aka default state
    const[count, setCount] = useState(0)
    const handlePlusClick = () => {
        if (count < 5){
            setCount(count + 1)
        }
    }

    const handleMinusClick = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    return(
        <div className={styles.ratings_wrapper}>
            <button onClick={handleMinusClick}>[-]</button>
            {[...Array(count)].map((heart, i) => (
                // return(
                    <span className={styles.heart} key={i}>
                        <Heart />
                    </span>
                // )
            ))}
            <button onClick={handlePlusClick}>[+]</button>
        </div>
    )
}