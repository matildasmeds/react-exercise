import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RecipesList from './RecipesList.js';
import RecipesForm from './RecipesForm.js';
import { NavLink, Input } from './BasicComponents.js';
import Requests from './Requests.js'

function NavBar() {
  return (
    <div>
      <nav className="pa3 pa4-ns mw7 center avenir">
        <NavLink path='/recipes' label='Recipes' />
        <NavLink path='/recipes/new' label='New Recipe' />
      </nav>
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

export default NavBar;
