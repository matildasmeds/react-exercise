import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import RecipesList from './RecipesList.js'
import RecipesNew from './RecipesNew.js'

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>
                <Link to="/recipes/new">New Recipe</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/recipes/new'><RecipesNew /></Route>
            <Route path='/recipes'><RecipesList /></Route>
            <Route path='/'><About /></Route>
          </Switch>

        </div>
      </Router>
    )
  }
}

function About() {
  return <h2>About</h2>;
}

export default NavBar;
