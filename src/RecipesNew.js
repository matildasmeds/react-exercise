import React, { useState } from 'react';
import Button from './Button.js';

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
    <div>
      <label className="db fw4 lh-copy f6" htmlFor='name'>Name</label>
      <input type='text'
             name='name'
             onChange={e => setName(e.target.value)}>
      </input>
    </div>
    <div className='mt3'>
      <label className="db fw4 lh-copy f6" htmlFor='description'>Description</label>
      <input type='text'
             onChange={e => setDescription(e.target.value)}>
      </input>
    </div>
    <div className='mt3'>
    <label className="db fw4 lh-copy f6" htmlFor='ingredients'>Ingredients (comma separated!)</label>
    <input type='text'
           onChange={e => setIngredients(e.target.value)}>
    </input>
    </div>
    <div className='mt3'>
      <Button label='Submit' callBack={saveRecipe}/>
    </div>
  </div>;
}

export default RecipesNew;
