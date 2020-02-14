import React, { useState } from 'react';
import Requests from './Requests.js';
import { Button } from './BasicComponents.js';

function Recipe(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const ingredients_html = props.ingredients.map((ingredient, index) =>
      <div key={index}>
        <Ingredient name={ingredient.name} />
      </div>
    );

  function deleteRecipe() {
    Requests.deleteRecipe(props.id).then(response => {
      if (response.status === 204) {
        setIsDeleted(true);
      }
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  const recipeHtml = <div className="w-100 mh4">
    <h3 className="f4 fwl baskerville mt0 lh-title">{props.name}</h3>
    <p>{props.description}</p>
    <div>{ingredients_html}</div>
    <div className="mt3">
      <a href={'/recipes/' + props.id + '/edit' }>Edit recipe</a>
      <Button label='Delete' callBack={deleteRecipe} />
    </div>
  </div>

  const deletedHtml = <div className="w-100 mh4">
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
