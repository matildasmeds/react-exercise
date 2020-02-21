import React, { useState } from 'react';
import Requests from './Requests.js';
import { Button } from './BasicComponents.js';

function Recipe(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const ingredients_html = props.ingredients.map((ingredient, index) =>
      <Ingredient name={ingredient.name} key={index} />
    );

  function deleteRecipe() {
    Requests.deleteRecipe(props.id).then(response => {
      if (response.status === 204) {
        setIsDeleted(true);
      }
    }, error => {
      console.log(error);
    });
  }

  const recipeHtml = <div className="w-100 mv2">
    <h3 className="f4 fwl baskerville mt0 lh-title">{props.name}</h3>
    <p>{props.description}</p>
    <div>{ingredients_html}</div>
    <div className="mt3">
      <a href={'/recipes/' + props.id + '/edit' }><Button label='Edit' /></a>
      <Button label='Delete' callBack={deleteRecipe} bgcolor='#ffaaa5' />
    </div>
  </div>

  const deletedHtml = <div className="w-100 mv2">
    <i>Deleted recipe...</i>
  </div>

  return <section className="bb b--black-10">
    { isDeleted ? deletedHtml : recipeHtml }
  </section>;
}

function Ingredient(props) {
  return <div>{props.name}</div>;
}

export default Recipe;
