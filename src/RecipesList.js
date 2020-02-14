import React from 'react';
import Recipe from './Recipe.js';
import { H1, Button } from './BasicComponents.js';

function RecipesList(props) {
  return <div className="pa4 black-80">
      <H1 label='All recipes' />
      { props.recipes && props.recipes.map(recipe =>
        <div key={recipe.id} id={'recipe-' + recipe.id}>
          <Recipe
            id={recipe.id}
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingredients}
          />
         </div>)}
      <a href='/recipes/new'><Button label='New' /></a>
    </div>;
};

export default RecipesList;
