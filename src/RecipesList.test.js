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
  expect(str).toBeInTheDocument();
  expect(str).toMatchSnapshot();
}

test('Renders list correctly', async () => {
  Requests.fetchRecipes = axios.get.mockResolvedValue({ status: 200, data: recipes });
  const { getByText, getAllByRole } = render(<RecipesList />);
  expect(Requests.fetchRecipes).toHaveBeenCalledTimes(1);

  const str = await waitForElement(() => getByText('My favorite recipe'));
  testStringExists(str);
  testStringExists(getByText('Easy, healthy, cheap, delicious'));
  testStringExists(getByText('Secret ingredient'));
  const buttons = getAllByRole('button');
  expect(buttons.map((button) => { return button.innerHTML; })).toEqual(['Edit', 'Delete', 'New']);

  // To test Edit & New buttons we would need to render App component,
  // that includes the Router
});
