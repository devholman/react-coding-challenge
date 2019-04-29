import React from 'react';
import { render, cleanup } from 'react-testing-library';
import MessageTableGrid from './Table';

let props = {
  messages: [
    {
      message: 'The night is dark and full of terrors.',
      priority: 3
    },
    {
      message:
        'Well, my brother has his sword, and I have my mind, and a mind needs books like a sword needs a whetstone.',
      priority: 2
    },
    {
      message: 'You know nothing, Jon Snow.',
      priority: 1
    }
  ]
};
afterEach(cleanup);

describe('Message Table', () => {
  it('should render a grid of incomming messages', () => {
    const { getByText } = render(<MessageTableGrid {...props} />);
    const firstMessage = getByText(props.messages[0].message);
    const secondMessage = getByText(props.messages[1].message);
    expect(firstMessage).toBeDefined();
    expect(secondMessage).toBeDefined();
  });

  it('assert there are 3 messages', () => {
    render(<MessageTableGrid {...props} />);
    expect(document.querySelectorAll('.message-row').length).toBe(3);
  });
});
