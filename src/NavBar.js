import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RecipesList from './RecipesList.js'
import RecipesNew from './RecipesNew.js'

function NavBar() {
  return (
    <Router>
      <div>
        <nav className="pa3 pa4-ns mw7 center avenir">
          <a className="link dim black f6 pr3 f5-ns dib mr3" href="/recipes" title="Recipes">Recipes</a>
          <a className="link dim black f6 pr3 f5-ns dib mr3" href="/recipes/new" title="New">New Recipe</a>
        </nav>
        <section className="mw7 center avenir">
          <Switch>
            <Route path='/recipes/new'><RecipesNew /></Route>
            <Route path='/recipes'><RecipesList /></Route>
            <Route path='/'><About /></Route>
          </Switch>
        </section>
      </div>
    </Router>
  )
};

function About() {
  return <h1 className="baskerville fw1 ph3 ph0-l">About...</h1>;
}

export default NavBar;
