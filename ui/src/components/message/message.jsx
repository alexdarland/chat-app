const React = require('react')
const PropTypes = require('prop-types')
const moment = require('moment')

class Message extends React.Component {

  render() {
    const { username, time, text } = this.props.message

    return (
      <div className='message'>
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
