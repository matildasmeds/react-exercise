import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import RecipesList from './RecipesList.js';

test('renders the list correctly', () => {
  const recipes = [{
    id: 1,
    name: 'My favorite recipe',
    description: 'Easy, healthy, cheap, delicious',
    ingredients: [{
      name: 'Secret ingredient'
    }]
  }];
  const { getByText } = render(<RecipesList recipes={recipes} />);
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