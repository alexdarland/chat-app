const React = require('react')
const Connector = require('../../core/js/connector.js')
const ChatInput = require('../chat-input/chat-input.jsx')
const Header = require('../header/header.jsx')
const MessageList = require('../../components/message-list/message-list.jsx')
const idGenerator = require('../../../../common/id-generator')

class ChatApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: localStorage.getItem('username') || 'Anonymous',
      id: localStorage.getItem('id') || idGenerator.generateId(),
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
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }

  postMessage(text) {
    this.state.connector.postMessage(this.state.id, this.state.username, text)
  }

  render() {
    return (
      <div>
        {/*{this.state.isConnected ? 'Connected' : 'Disconnected'}*/}
        <Header username={this.state.username} updateState={this.updateState.bind(this)}/>
        <MessageList messages={this.state.messages}/>
        <ChatInput postMessage={this.postMessage.bind(this)}/>
      </div>
    )
  }
}

module.exports = ChatApp
