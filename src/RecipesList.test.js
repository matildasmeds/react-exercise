import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import RecipesList from './RecipesList.js';
import Requests from './Requests.js';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

describe('<RecipesList />', () => {
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

  it('Renders correctly', async () => {
    Requests.fetchRecipes = axios.get.mockResolvedValue({ status: 200, data: recipes });
    const { getByText } = render(<RecipesList />);
    let str = await waitForElement(() => getByText('My favorite recipe'));
    testStringExists(str);
    str = await waitForElement(() => getByText('Easy, healthy, cheap, delicious'));
    testStringExists(str);
    str = await waitForElement(() => getByText('Secret ingredient'));
    testStringExists(str);
  });
 });
