const React = require('react')
const Message = require('../message/message.jsx')
class MessageList extends React.Component {

  render() {
    return (
      <ul className='message-list'>
          { this.props.messages.map((message, id) => {
          return <li className='message-list__item' key={id}><Message message={message} /></li>
        }) }
      </ul>
    )
  }
}

// TODO: Add proptypes

module.exports = MessageList
