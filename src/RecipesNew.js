import React, { Component } from 'react';
import Button from './Button.js';

class RecipesNew extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '', ingredients: [] };
    this.setIngredients = this.setIngredients.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  async saveRecipe() {
    const url = 'http://localhost:8000/api/recipe/';
    const payload = {
      name: this.state.name,
      description: this.state.description,
      ingredients: this.state.ingredients
    };
    console.log(payload);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  }

  setIngredients(e) {
    const ingredients = [];
    e.target.value.split(',').map(ingredient => {
      ingredients.push({ name: ingredient });
    });
    this.setState({ingredients: ingredients});
  }

  render() {
    return <div className="pa4 black-80">
      <h1 className="baskerville fw1 ph3 ph0-l">New recipe</h1>
      <div>
        <label className="db fw4 lh-copy f6" for='name'>Name</label>
        <input type='text'
              name='name'
               onChange={e => this.setState({name: e.target.value})}>
        </input>
      </div>
      <div className='mt3'>
        <label className="db fw4 lh-copy f6" for='description'>Description</label>
        <input type='text'
               onChange={e => this.setState({description: e.target.value})}>
        </input>
      </div>
      <div className='mt3'>
      <label className="db fw4 lh-copy f6" for='ingredients'>Ingredients (comma separated!)</label>
      <input type='text'
             onChange={this.setIngredients}>
      </input>
      </div>
      <div className='mt3'>
        <Button label='Submit' callBack={this.saveRecipe}/>
      </div>
    </div>;
  }
}

export default RecipesNew;
