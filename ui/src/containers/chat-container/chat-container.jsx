const React = require('react')
const Connector = require('../../core/js/connector.js')
const Message = require('../../components/message/message.jsx')
const ChatInput = require('../chat-input/chat-input.jsx')

class ChatApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: localStorage.getItem('username') || 'Anonymous',
      isConnected: false,
      messages: [],
      connector: new Connector(this.updateState.bind(this))
    }
  }

  updateState(object, shouldReplaceState) {
    if(shouldReplaceState) {
      this.setState(object)
    } else {
      Object.keys(object).map(key => {
        const newValue = typeof Array.isArray(object[key]) ? this.state[key].concat(object[key]) : {...this.state[key], ...object[key]}
        const newObject = {}
        newObject[key] = newValue

        this.setState(newObject)
      })
    }
  }

  postMessage(text) {
    this.state.connector.postMessage(this.state.username, text)
  }

  render() {
    return (
      <div>
        {this.state.isConnected ? 'Connected' : 'Disconnected'}
        <h2>Messages</h2>
        <ul>
          { this.state.messages.map((message, id) => { return <Message key={id} message={message} /> }) }
        </ul>
        <ChatInput postMessage={this.postMessage.bind(this)}/>
      </div>
    )
  }
}

module.exports = ChatApp
