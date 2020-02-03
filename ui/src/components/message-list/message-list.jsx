const React = require('react')
const Message = require('../message/message.jsx')

class MessageList extends React.Component {

  getMessageRelativePosition(index) {
    const previousMessage = this.props.messages[index - 1]
    const currentMessage = this.props.messages[index]
    const nextMessage = this.props.messages[index + 1]

    const isFirst =
      (!previousMessage || currentMessage.id !== previousMessage.id) &&
      (nextMessage && currentMessage.id === nextMessage.id)

    const isLast =
      (previousMessage && currentMessage.id === previousMessage.id) &&
      (!nextMessage || currentMessage.id !== nextMessage.id)

    const isMiddle =
      (previousMessage && currentMessage.id === previousMessage.id) &&
      (nextMessage && currentMessage.id === nextMessage.id)

    return isFirst ? 'first' : isLast ? 'last' : isMiddle ? 'middle' : ''
  }

  renderItemClass(relativePosition) {
    return `message-list__item${ relativePosition === 'middle' || relativePosition === 'last' ? ' message-list__item--tight' : '' }`
  }

  render() {
    return (
      <ul className='message-list'>
          { this.props.messages.map((message, index) => {
            const relativePosition = this.getMessageRelativePosition(index)
            return <li className={this.renderItemClass(relativePosition)} key={index}><Message message={message} modifier={relativePosition}/></li>
        }) }
      </ul>
    )
  }
}

// TODO: Add proptypes

module.exports = MessageList
