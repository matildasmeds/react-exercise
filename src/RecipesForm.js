import React, { useState } from 'react';
import { Button, Input, H1, Alert } from './BasicComponents.js'
import Requests from './Requests.js';

function RecipesForm(props) {
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
    let promise = null;
    if (props.form_type === 'edit') {
      promise = Requests.saveRecipe(getPayload());
    } else if (props.form_type === 'new') {
      promise = 'TODO';
    } else {
      return;
    }

    promise.then(response => {
      if (response.status === 201) {
        setAlert({message: 'New recipe created!', status: 'success'});
      } else if (response.status === 200) {
        setAlert({message: 'Recipe updated!', status: 'success'});
      } else {
        const message = `${response.statusText} : ${JSON.stringify(response.data)}`;
        setAlert({message: message, status: 'error'});
      }
    }, error => {
      setAlert({message: error.message, status: 'error'});
    });
  }

  return <div className="pa4 black-80">
    <H1 label={props.form_heading} />
    <Input name='name' type='text' label='Name' callBack={setName} />
    <Input name='description' type='text' label='Description' callBack={setDescription} />
    <Input name='ingredients' type='text' label='Ingredients (comma separated list)' callBack={setIngredients} />
    <div className='mv3'>
      <Button label='Submit' callBack={saveRecipe}/>
    </div>
    <Alert alert={alert} />
  </div>;
}

export default RecipesForm;
