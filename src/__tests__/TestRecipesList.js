import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RecipesList from '../RecipesList.js';
import Recipe from '../Recipe.js';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Urls from '../Urls.js';

// Mock call to backend that returns some items
// Snapshot?
test('renders the list correctly', () => {
  const responseData = [{
    name: 'My favorite recipe',
    description: 'Easy, healthy, cheap, delicious',
    ingredients: [{
      name: 'Secret ingredient'
    }]
  }];
  const mock = new MockAdapter(axios);
  mock.onGet(Urls.recipes.list).reply(200, responseData);
  const recipeList = renderer.create(<RecipesList />);
  const recipesListTree = recipeList.toJSON();
  console.log(recipesListTree);

  expect(recipesListTree).toMatchSnapshot();
});
