import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CocktailPage from './pages/CocktailPage'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktail/:id" element={<CocktailPage />} />
      </Routes>
    </div>
  )
}

export default App
