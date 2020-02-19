import React from 'react';
import { render, fireEvent, waitForElement, act, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipesForm from './RecipesForm.js';
import Requests from './Requests.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => ({ id: undefined }))
}));

const recipe_with_id = {
  id: 1,
  name: 'My favorite recipe',
  description: 'Easy, healthy, cheap, delicious',
  ingredients: [{
    name: 'Secret ingredient'
  }]
};

const recipe = Object.assign({}, recipe_with_id);
delete recipe.id;

test('creates a new Recipe - happy path', async () => {
  Requests.createRecipe = axios.post.mockResolvedValue({ status: 201, data: recipe_with_id });
  const { getByText, getByLabelText, getByRole } = render(< RecipesForm form_heading='Test New' form_type='new' />);

  const inputs = {
    name: getByLabelText('Name'),
    description: getByLabelText('Description'),
    ingredients: getByLabelText('Ingredients (comma separated list)')
  };
  const heading = getByRole('heading');
  expect(heading.innerHTML).toEqual('Test New');

  const linkToList = getByRole('link');
  expect(linkToList.innerHTML).toEqual('See all recipes');

  fireEvent.change(inputs.name, { target: { value: 'My favorite recipe' } });
  fireEvent.change(inputs.description, { target: { value: 'Easy, healthy, cheap, delicious'}});
  fireEvent.change(inputs.ingredients, { target: { value: 'Secret ingredient' }});

  fireEvent.click(getByRole('button'));

  expect(Requests.createRecipe).toHaveBeenCalledTimes(1);
  expect(Requests.createRecipe).toHaveBeenCalledWith(recipe);

  const message = await waitForElement(() => getByText('New recipe created!'));
  expect(message).not.toBeNull();
});

test('creates a new Recipe - incomplete data', () => {});

test('edit a Recipe - happy path', () => {});

test('creates a new Recipe - server does not respond', () => {});
