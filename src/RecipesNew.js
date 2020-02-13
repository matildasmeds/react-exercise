import React, { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

function RecipesNew() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const getPayload = () => {
    return {
      name: name,
      description: description,
      ingredients: ingredients.split(',').map(ingredient => {
        return { name: ingredient }
      })
    }
  }

  const saveRecipe = async () => {
    const url = 'http://localhost:8000/api/recipe/';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(getPayload())
    });
    console.log(response);
  }

  return <div className="pa4 black-80">
    <h1 className="baskerville fw1 ph3 ph0-l">New recipe</h1>
    <Input name='name' type='text' label='Name' callBack={setName} />
    <Input name='description' type='text' label='Description' callBack={setDescription} />
    <Input name='ingredients' type='text' label='Ingredients (comma separated list)' callBack={setIngredients} />
    <div className='mt3'>
      <Button label='Submit' callBack={saveRecipe}/>
    </div>
  </div>;
}

export default RecipesNew;
