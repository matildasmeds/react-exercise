import React, { Component } from 'react';
import Recipe from './Recipe.js';

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
    this.fetchRecipes.bind(this)();
  }

  async fetchRecipes() {
    const url = 'http://localhost:8000/api/recipe';
    const response = await fetch(url);

    if (response.ok) {
      let recipes = await response.json();
      this.setState({ recipes: recipes});
    }
  }

  render() {
    const recipes_html = this.state.recipes.map(recipe =>
      <div key={recipe.id}>
        <Recipe
          name={recipe.name}
          description={recipe.description}
          ingredients={recipe.ingredients}
        />
      </div>
      );
    return (
      <div>
        <h1>All Recipes</h1>
        <div>
          {recipes_html}
        </div>
      </div>
    )
  }
}

export default RecipesList;
