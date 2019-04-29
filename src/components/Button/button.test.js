import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import StyledButton from './Button';

afterEach(cleanup);

describe('Button component', () => {
  const props = {
    text: 'Test Button Text'
  };
  test('should render button text', () => {
    const { getByTestId } = render(<StyledButton {...props} />);
    expect(getByTestId('styled-button').innerHTML).toEqual('Test Button Text');
  });
  test('should run a function when clicked', () => {
    const mock = jest.fn();
    const { getByText } = render(<StyledButton {...props} action={mock} />);
    fireEvent.click(getByText('Test Button Text'));
    expect(mock).toHaveBeenCalled();
  });
});
