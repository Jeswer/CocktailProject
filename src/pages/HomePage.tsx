import { useEffect, useState } from 'react'
import CocktailCard from '../components/CocktailCard'
import { type Cocktail } from '../types'
import RandomCocktail from '../components/RandomCocktail'

export default function HomePage() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([])
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
      .then(res => res.json())
      .then(data => setCocktails(data.drinks || []))
  }, [])
  return (
    <main style={{ padding: '1rem' }}>
      <h1>Random Cocktail</h1>
      <RandomCocktail />
      <h1>Popular Cocktails</h1>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {cocktails.map(cocktail => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </main>
  )
}
