import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RecipesList from './RecipesList.js';
import RecipesNew from './RecipesNew.js';
import { NavLink } from './BasicComponents.js';

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
            <Route path='/recipes/new'><RecipesNew /></Route>
            <Route path='/recipes'><RecipesList /></Route>
            <Route path='/'><About /></Route>
          </Switch>
        </Router>
      </section>
    </div>
  )
};

function About() {
  return <h1 className="baskerville fw1 ph3 ph0-l">About...</h1>;
}

export default NavBar;
