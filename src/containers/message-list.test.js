import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import MessageList from './message-list';

afterEach(cleanup);

describe('Message App', () => {
  test('Should toggle message retrieval button text', () => {
    const { getByText } = render(<MessageList />);
    const btn = getByText('Stop Messages');
    fireEvent.click(btn);
    expect(btn.innerHTML).toEqual('Start Messages');
  });

  test('should render clear message button text', () => {
    const { getByText } = render(<MessageList />);
    expect(getByText('Clear All Messages')).toBeDefined();
  });
});
