import React, { useState, useEffect } from 'react';
import Recipe from './Recipe.js';
import { H1, Button, Input } from './BasicComponents.js';
import Requests from './Requests';

function RecipesList(props) {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const params = searchTerm ? '?name=' + searchTerm : '';
    Requests.fetchRecipes(params).then(result => {
      setRecipes(result.data);
    });
  }, [searchTerm]);


  return <div className="pa4 black-80">
      <Input name='name' type='text' label='Search recipe...' callBack={setSearchTerm} />
      <H1 label='All recipes' />
      { recipes && recipes.map(recipe =>
        <div key={recipe.id} id={'recipe-' + recipe.id}>
          <Recipe
            id={recipe.id}
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingredients}
          />
         </div>) }
      <a href='/recipes/new'><Button label='New' bgcolor='#a8e6cf' /></a>
    </div>;
};

export default RecipesList;
