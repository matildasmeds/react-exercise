import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RecipesList from './RecipesList.js'
import RecipesNew from './RecipesNew.js'

function NavLink(props) {
  return <a className="link dim black f6 pr3 f5-ns dib mr3"
            href={props.path} title={props.label}>
    {props.label}
  </a>;
}

function NavBar() {
  return (
    <Router>
      <div>
        <nav className="pa3 pa4-ns mw7 center avenir">
          <NavLink path='/recipes' label='Recipes' />
          <NavLink path='/recipes/new' label='New Recipe' />
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
