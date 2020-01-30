import React from "react";
import ReactDOM from 'react-dom'
import ChatApp from '../containers/chat-container/chat-container.jsx'

const APPS = {
  ChatApp: {
    entry: ChatApp
  }
}

function initApp(el) {
  const App = APPS[el.getAttribute('data-react-app')]
  if (!App) return
  ReactDOM.render(<App.entry name='there'/>, el)
}

const apps = document.querySelectorAll('[data-react-app]')

for(let i = 0; i < apps.length; i++) {
  initApp(apps[i])
}
