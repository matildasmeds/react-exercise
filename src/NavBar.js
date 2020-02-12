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
  }
}

function About() {
  return <h1 className="baskerville fw1 ph3 ph0-l">About...</h1>;
}

export default NavBar;
