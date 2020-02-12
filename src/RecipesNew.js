import React, { Component } from 'react';

class RecipesNew extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '', ingredients: [] };
  }

  async saveRecipe() {
    const url = 'http://localhost:8000/api/recipes';
    const payload = {
      name: this.state.name,
      description: this.state.description,
      ingredients: this.state.ingredients
    };
  }

  // TODO: Make responsive if there is time
  render() {
    return <div>
      <h2>New Recipe</h2>
      <form>
        <span>Name: <input type='text' name='name'></input></span><br/>
        <span>Description: <input type='text'></input></span><br/>
        <span>TODO: Add ingredients, either + button for adding next one, or comma separated</span><br/>
      </form>
    </div>;
  }
}

export default RecipesNew;
