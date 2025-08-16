import { Link } from 'react-router-dom'
import { type Cocktail } from '../types'

type Props = {
  cocktail: Cocktail
}

export default function CocktailCard({ cocktail }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <img src={cocktail.drinkThumb} alt={cocktail.drinkTitle} style={{ width: '100%' }} />
      <h3>{cocktail.drinkTitle}</h3>
      <Link to={`/cocktail/${cocktail.ID}`}>View Recipe</Link>
    </div>
  )
}
