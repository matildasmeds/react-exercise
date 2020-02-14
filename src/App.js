import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RecipesList from './RecipesList.js';
import RecipesForm from './RecipesForm.js';

function App() {
  return (
    <div>
      <section className="mw7 center avenir">
        <Router>
          <Switch>
            <Route path='/recipes/new'><RecipesForm form_heading='New Recipe' form_type='new' /></Route>
            <Route path='/recipes/:id/edit'><RecipesForm form_heading='Edit Recipe' form_type='edit' /></Route>
            <Route path='/recipes'><RecipesList/></Route>
            <Route path='/'><RecipesList/></Route>
          </Switch>
        </Router>
      </section>
    </div>
  )
};

export default App;
