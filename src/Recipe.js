import React from 'react';

function Recipe(props) {
  const ingredients_html = props.ingredients.map((ingredient, index) =>
      <div key={index}>
        <Ingredient name={ingredient.name} />
      </div>
    );
  return <div>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <div>{ingredients_html}</div>
  </div>;
}

function Ingredient(props) {
  return <div>{props.name}</div>;
}

export default Recipe;
