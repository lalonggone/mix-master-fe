
import React, { useEffect } from 'react';
import './AllDrinksGrid.css';
import NavBar from '../NavBar/NavBar';
import PropTypes from 'prop-types';


function AllDrinksGrid({ recipes, setDrinkType }) {
  useEffect(() => {
    showCocktails()
  }, [])

  const showCocktails = () => {
    setDrinkType('true')
  }

  const displayRecipes = recipes.map(recipe => {
    return (
      <div className="drink-card" key={recipe.id}>
        <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
      </div>
    )
  })

return (
    <div>
      <section className="home-title">
        <h1>Mix Master</h1>
      </section>
      <NavBar setDrinkType={setDrinkType} />
      <section className="drinks-grid">
        {displayRecipes}
      </section>
    </div>
  )

}


export default AllDrinksGrid;

AllDrinksGrid.propTypes ={
  recipes: PropTypes.arrayOf(PropTypes.shape({
    alcoholic: PropTypes.bool,
    directions: PropTypes.object,
    id: PropTypes.number,
    ingredients: PropTypes.array, 
    isFavorite: PropTypes.bool,
    name: PropTypes.string
  })).isRequired,
  setDrinkType: PropTypes.func.isRequired
};