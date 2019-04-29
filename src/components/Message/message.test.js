import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Message from './Message';

afterEach(cleanup);

describe('Message display component', () => {
  const props = {
    messageText: 'Winter is coming',
    messagePriority: 2
  };
  it('should render message text', () => {
    const { getByTestId } = render(<Message {...props} />);
    expect(getByTestId('message-text').innerHTML).toEqual('Winter is coming');
  });
  it('should render message priority text', () => {
    const { getByTestId } = render(<Message {...props} />);
    expect(getByTestId('message-priority').innerHTML).toEqual('warning (2)');
  });
});
