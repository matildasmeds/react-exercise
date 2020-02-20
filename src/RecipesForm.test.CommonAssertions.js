
export function getInputs(getByLabelText) {
  return {
    name: getByLabelText('Name'),
    description: getByLabelText('Description'),
    ingredients: getByLabelText('Ingredients (comma separated list)')
  }
};

export function commonAssertions(getByRole, { headingText }) {
  const heading = getByRole('heading');
  expect(heading.innerHTML).toEqual(headingText);

  const linkToList = getByRole('link');
  expect(linkToList.innerHTML).toEqual('See all recipes');
  expect(linkToList.getAttribute('href')).toEqual('/');
}
