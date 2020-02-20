import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipesList from './RecipesList.js';
import Requests from './Requests.js';
import axios from 'axios';

jest.mock('axios');

const recipes = [{
  id: 1,
  name: 'My favorite recipe',
  description: 'Easy, healthy, cheap, delicious',
  ingredients: [{
    name: 'Secret ingredient'
  }]
}];

const testStringExists = (str) => {
  expect(str).not.toBeNull();
  expect(str).toMatchSnapshot();
}

test('Renders list correctly', async () => {
  Requests.fetchRecipes = axios.get.mockResolvedValue({ status: 200, data: recipes });
  const { getByText, getAllByRole } = render(<RecipesList />);
  expect(Requests.fetchRecipes).toHaveBeenCalledTimes(1);

  // How to test that Recipe-component has rendered with correct props with React Testing Library?
  // Why do I need waitForElement here, while in RecipesForm / Recipe tests it is not needed?
  let str = await waitForElement(() => getByText('My favorite recipe'));
  testStringExists(str);
  str = await waitForElement(() => getByText('Easy, healthy, cheap, delicious'));
  testStringExists(str);
  str = await waitForElement(() => getByText('Secret ingredient'));
  testStringExists(str);
  const buttons = await waitForElement(() => getAllByRole('button'));
  expect(buttons.map((button) => { return button.innerHTML; })).toEqual(['Edit', 'Delete', 'New']);

  // How to test that clicking 'New' goes to right path?
});
