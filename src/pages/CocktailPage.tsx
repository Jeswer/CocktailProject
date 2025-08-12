import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { type Cocktail } from '../types'

export default function CocktailPage() {
  const { id } = useParams()
  const [cocktail, setCocktail] = useState<Cocktail | null>(null)

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setCocktail(data.drinks ? data.drinks[0] : null))
  }, [id])

  if (!cocktail) return <p>Loading...</p>

  return (
    <main style={{ padding: '1rem' }}>
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '300px' }} />
      <h2>Ingredients</h2>
      <ul>
        {Object.keys(cocktail)
          .filter(key => key.startsWith('strIngredient') && cocktail[key as keyof Cocktail])
          .map((key, index) => (
            <li key={index}>{cocktail[key as keyof Cocktail]}</li>
          ))}
      </ul>
      <h2>Instructions</h2>
      <p>{cocktail.strInstructions}</p>
    </main>
  )
}
