const React = require('react')
const Connector = require('../../core/js/connector')

class ChatApp extends React.Component {
  state = {
    connected: false
  }

  connector = new Connector(this.updateState.bind(this))

  updateState(object) {
    this.setState(object)
  }

  render() {
    return (
      <div>
        {this.state.connected ? 'Connected' : 'Disconnected'}
      </div>
    )
  }
}

module.exports = ChatApp
