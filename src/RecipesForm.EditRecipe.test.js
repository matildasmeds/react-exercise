import React from 'react';
import { render, fireEvent, waitForElement, act, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecipesForm from './RecipesForm.js';
import Requests from './Requests.js';
import axios from 'axios';
import 'react-router-dom';
import { getInputs, commonAssertions } from './RecipesForm.test.CommonAssertions.js';

jest.mock('axios');

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => ({ id: 5 }))
}));

const recipe_with_id = {
  id: 5,
  name: 'My favorite recipe',
  description: 'Easy, healthy, cheap, delicious',
  ingredients: [{
    name: 'Secret ingredient'
  }]
};

const updated_recipe = {
  id: 5,
  name: 'My second best recipe',
  description: 'Could be easier',
  ingredients: [
    { name: 'Secret ingredient' },
    { name: 'Public ingredient' }
  ]
}

test('edit a Recipe - happy path', async () => {
  Requests.fetchRecipe = axios.get.mockResolvedValue({ status: 200, data: recipe_with_id });
  Requests.updateRecipe = axios.patch.mockResolvedValue({ status: 200, data: updated_recipe });

  const { getByText, getByLabelText, getByRole } = render(< RecipesForm form_heading='Test Edit' form_type='edit' />);

  expect(Requests.fetchRecipe).toHaveBeenCalledTimes(1);
  expect(Requests.fetchRecipe).toHaveBeenCalledWith(5);

  commonAssertions(getByRole, { headingText: 'Test Edit' });
  const inputs = getInputs(getByLabelText);

  fireEvent.change(inputs.name, { target: { value: 'My second best recipe' } });
  fireEvent.change(inputs.description, { target: { value: 'Could be easier'}});
  fireEvent.change(inputs.ingredients, { target: { value: 'Secret ingredient, Public ingredient' }});

  fireEvent.click(getByRole('button'));

  expect(Requests.updateRecipe).toHaveBeenCalledTimes(1);
  expect(Requests.updateRecipe).toHaveBeenCalledWith(updated_recipe);

  const message = await waitForElement(() => getByText('Recipe updated!'));
  expect(message).not.toBeNull();
});
