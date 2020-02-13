import React, { useState, useEffect } from 'react';
import Recipe from './Recipe.js';
import { H1 } from './BasicComponents.js';
import axios from 'axios';
import Urls from './Urls.js'

function RecipesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios(Urls.recipes.list).then(result => {
      setRecipes(result.data);
    });
  }, []);

  console.log(recipes);

  return <div className="pa4 black-80">
      <H1 label='All recipes' />
      { recipes && recipes.map(recipe =>
        <div key={recipe.id}>
          <Recipe
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingredients}
          />
         </div>)}
    </div>;
};

export default RecipesList;
