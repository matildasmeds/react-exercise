import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input, H1, Alert, NavLink } from './BasicComponents.js'
import Requests from './Requests.js';

function RecipesForm(props) {
  const [alert, setAlert] = useState({ message: '', status: ''});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const { id } = useParams();

  // Try to get data from backend and fill in the form
  useEffect(() => {
    if (id) {
      Requests.fetchRecipe(id).then(response => {
        if (response.status === 200) {
          const { name, description, ingredients } = response.data;
          const ing_text = ingredients.map(ing => { return ing.name }).join(', ');
          setName(name);
          setDescription(description);
          setIngredients(ing_text);
        } else {
          setAlert({message: 'Could not fetch recipe!', status: 'error'});
        }
      });
    }
  }, [id]);

  const getPayload = () => {
    const payload = {
      name: name,
      description: description,
      ingredients: ingredients.split(',').map(ingredient => {
        return { name: ingredient.trim() }
      })
    }
    if (id) {
      payload.id = id;
    }
    return payload;
  }

  const saveRecipe = () => {
    let request = null;
    if (props.form_type === 'new') {
      request = Requests.createRecipe(getPayload());
    } else if (props.form_type === 'edit') {
      request = Requests.updateRecipe(getPayload());
    } else {
      return;
    }

    request.then(response => {
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
    <Input name='name' type='text' label='Name' value={name} callBack={setName} />
    <Input name='description' type='text' label='Description' value={description} callBack={setDescription} />
    <Input name='ingredients' type='text' label='Ingredients (comma separated list)' value={ingredients} callBack={setIngredients} />
    <div className='mt3 mb5'>
      <Button label='Submit' callBack={saveRecipe}/>
    </div>
    <NavLink label='See all recipes' path='/' />
    <Alert alert={alert} />
  </div>;
}

export default RecipesForm;
