import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f9f9f9' }}>
      <nav>
        <Link to="/">🍹 Cocktail Recipes</Link>
      </nav>
    </header>
  )
}
