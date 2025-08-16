import { useState } from 'react'
import { type Cocktail } from '../types'
import { useNavigate } from 'react-router-dom'

export default function RandomCocktail() {
    const [,setRandomCocktail] = useState<Cocktail | null>(null)
    const navigate =useNavigate()

    const getRandomcocktail = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            const cocktail = data.drinks ? data.drinks[0]: null
            setRandomCocktail(cocktail)

            navigate(`/cocktail/${cocktail.ID}`)
        })
        .catch(err => console.error('Error fetching random cocktail', err))
    }
    

  return(
    <div>
    <button onClick={getRandomcocktail}>
    I'm feeling lucky!🧦
    </button>
    </div>
  )
}