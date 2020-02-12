import React from 'react';

function Recipe(props) {
  const ingredients_html = props.ingredients.map(ingredient =>
      <Ingredient name={ingredient.name} />
    );
  return <div key={props.id}>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <div>{ingredients_html}</div>
  </div>;
}

function Ingredient(props) {
  return <span>{props.name}</span>;
}

export default Recipe;
