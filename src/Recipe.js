import React from 'react';

function Recipe(props) {
  const ingredients_html = props.ingredients.map((ingredient, index) =>
      <div key={index}>
        <Ingredient name={ingredient.name} />
      </div>
    );
  return <section className="bb b--black-10">
    <div className="w-100 mt4 mb5">
      <h3 className="f4 fwl baskerville mt0 lh-title">{props.name}</h3>
      <p>{props.description}</p>
      <div>{ingredients_html}</div>
    </div>
  </section>;
}

function Ingredient(props) {
  return <div>{props.name}</div>;
}

export default Recipe;
