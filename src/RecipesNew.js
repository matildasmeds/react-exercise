import React, { Component } from 'react';

class RecipesNew extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '', ingredients: [] };
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

  // TODO: Make responsive if there is time
  render() {
    return <div>
      <h2>New Recipe</h2>
      <div>Name:
        <input type='text'
               onChange={e => this.setState({name: e.target.value})}>
        </input>
      </div>
      <div>Description:
        <input type='text'
               onChange={e => this.setState({description: e.target.value})}>
        </input></div>
      <div>TODO: Add ingredients, either + button for ndaadding next one, or comma separated</div>
      <div><button onClick={this.saveRecipe}>Submit</button></div>
    </div>;
  }
}

export default RecipesNew;
