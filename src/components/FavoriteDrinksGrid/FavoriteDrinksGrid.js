import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DrinkDetails from '../DrinkDetails/DrinkDetails';
import mixedDrinkRecipes from '../../mock-data';
import NavBar from '../NavBar/NavBar';

function FavoriteDrinksGrid({ setDrinkType }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    findFavorites()
  }, [])

  const findFavorites = () => {
    const filteredRecipes = mixedDrinkRecipes.filter(recipe => {
      return recipe.isFavorite
    }).map(recipe => {
      return (
        <div className="drink-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.name} />
          <h2>{recipe.name}</h2>
        </div>
      )
    })
    setFavorites(filteredRecipes)
  }

  return (
    <div>
      <section className="home-title">
        <h1>Mix Master</h1>
      </section>
      <NavBar setDrinkType={setDrinkType} />
      <section className="drinks-grid">
        {favorites}
      </section>
    </div>
  )

}


export default FavoriteDrinksGrid;

FavoriteDrinksGrid.propTypes = {
  setDrinkType: PropTypes.func.isRequired
};