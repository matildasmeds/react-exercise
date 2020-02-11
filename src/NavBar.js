import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class NavBar extends Component {
  navigate() {
    console.log('Navigate');
  }

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
function RecipesList() {
  return <h2>All Recipes</h2>;
}
function RecipesNew() {
  return <h2>New Recipe</h2>;
}

export default NavBar;
