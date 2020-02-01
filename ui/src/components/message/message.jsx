const React = require('react')
const PropTypes = require('prop-types')
const moment = require('moment')

class Message extends React.Component {

  render() {
    const { id, username, time, text } = this.props.message
    const messageClass = `message${ id === localStorage.getItem('id') ? ' message--own' : '' }`
    return (
      <div className={messageClass}>
        <div className='message__info'>
          <span>{username}</span>
          <span>{moment(time).calendar()}</span>
        </div>
        <p className='message__text'>{text}</p>
      </div>
    )
  }
}

Message.propTypes = {
  message: PropTypes.shape({
    username: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })
}

module.exports = Message
