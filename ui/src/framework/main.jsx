const React = require('react')
const ReactDOM = require('react-dom')
const ChatApp = require('../containers/chat-container/chat-container.jsx')

const APPS = {
  ChatApp: {
    entry: ChatApp
  }
}

function initApp(el) {
  const App = APPS[el.getAttribute('data-react-app')]
  if (!App) return
  ReactDOM.render(<App.entry/>, el)
}

const apps = document.querySelectorAll('[data-react-app]')

for(let i = 0; i < apps.length; i++) {
  initApp(apps[i])
}
