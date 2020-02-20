import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Recipe from './Recipe.js'
import axios from 'axios';
import Requests from './Requests.js';

const props = {
  id: 5,
  name: 'Yet another recipe',
  description: 'Simple',
  ingredients: [ { name: 'Anything you like' }]
};

jest.mock('axios');

test('Renders correctly', async () => {
  const { getAllByRole, getByText} = render(<Recipe {...props} />);
  expect(getByText('Yet another recipe')).not.toBeNull();
  expect(getByText('Simple')).not.toBeNull();
  expect(getByText('Anything you like')).not.toBeNull();

  const [editButton, deleteButton] = getAllByRole('button');
  expect(editButton.innerHTML).toEqual('Edit');
  expect(deleteButton.innerHTML).toEqual('Delete');
});

test('Redirects to edit correctly', async () => {
  const { getAllByRole } = render(<Recipe {...props} />);

  const [editButton, deleteButton] = getAllByRole('button');

  fireEvent.click(editButton);

  // How to test correct navigation?
});



test('Can be deleted', async () => {
  Requests.deleteRecipe = axios.delete.mockResolvedValue({ status: 204 });

  const { getAllByRole, getByText} = render(<Recipe {...props} />);
  const [editButton, deleteButton] = getAllByRole('button');

  fireEvent.click(deleteButton);

  expect(Requests.deleteRecipe).toHaveBeenCalledTimes(1);
  expect(Requests.deleteRecipe).toHaveBeenCalledWith(5);

  const message = await waitForElement(() => getByText('Deleted recipe...'));
  expect(message).not.toBeNull();
});
