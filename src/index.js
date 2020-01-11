import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './components/message-list';
import GlobalTheme from './GlobalTheme';

const NewApp = require('./components/message-list').default

function renderApp(App) {
  ReactDOM.render(
    <GlobalTheme>
      <App />
    </GlobalTheme>, 
  document.getElementById('root'))
}

renderApp(MessageList)

if (module.hot) {
  module.hot.accept('./components/message-list', () => {
    renderApp(NewApp)
  })
}
