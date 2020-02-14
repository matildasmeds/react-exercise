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

  it('Renders correctly', () => {
    Requests.fetchRecipes = axios.get.mockResolvedValue({ status: 200, data: recipes });
    const { getByText } = render(<RecipesList />);
    [
      'My favorite recipe',
      'Easy, healthy, cheap, delicious',
      'Secret ingredient'
    ].forEach((str) => {
      const html = getByText(str);
      expect(html).not.toBeNull();
      expect(html).toMatchSnapshot();
    });
    const recipesListTree = renderer.create(<RecipesList recipes={recipes} />).toJSON();
    expect(recipesListTree).toMatchSnapshot();
  });
 });
