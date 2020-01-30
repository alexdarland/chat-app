const React = require('react')
const Connector = require('../../core/js/connector.js')
const Message = require('../../components/message/message.jsx')

class ChatApp extends React.Component {
  state = {
    connected: false,
    messages: []
  }

  connector = new Connector(this.updateState.bind(this))

  updateState(object) {
    this.setState(object)
  }

  render() {
    return (
      <div>
        {this.state.connected ? 'Connected' : 'Disconnected'}
        <h2>Messages</h2>
        <ul>
          { this.state.messages.map((message, id) => { return <Message key={id} message={message} /> }) }
        </ul>
      </div>
    )
  }
}

module.exports = ChatApp
