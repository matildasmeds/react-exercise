import React, { useState } from 'react';
import { Button, Input, H1, Alert } from './BasicComponents.js'

function RecipesNew() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [alert, setAlert] = useState({ message: '', status: ''});

  const getPayload = () => {
    return {
      name: name,
      description: description,
      ingredients: ingredients.split(',').map(ingredient => {
        return { name: ingredient }
      })
    }
  }

  const saveRecipe = () => {
    const url = 'http://localhost:8000/api/recipe/';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(getPayload())
    }).then(response => {
      if (response.ok) {
        setAlert({message: 'New recipe created!', status: 'success'});
      } else {
        response.json().then(json => {
            const message = `${response.statusText} : ${JSON.stringify(json)}`;
            setAlert({message: message, status: 'error'});
          }
        );
      }
    }, error => {
      setAlert({message: error.message, status: 'error'});
    });
  }

  return <div className="pa4 black-80">
    <H1 label='New Recipe' />
    <Input name='name' type='text' label='Name' callBack={setName} />
    <Input name='description' type='text' label='Description' callBack={setDescription} />
    <Input name='ingredients' type='text' label='Ingredients (comma separated list)' callBack={setIngredients} />
    <div className='mv3'>
      <Button label='Submit' callBack={saveRecipe}/>
    </div>
    <Alert alert={alert} />
  </div>;
}

export default RecipesNew;
