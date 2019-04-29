import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './containers/message-list';

const NewApp = require('./containers/message-list').default;

function renderApp(App) {
  ReactDOM.render(<App />, document.querySelector('.main'));
}

renderApp(MessageList);

if (module.hot) {
  module.hot.accept('./containers/message-list', () => {
    renderApp(NewApp);
  });
}
