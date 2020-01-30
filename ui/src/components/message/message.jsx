const React = require('react')
const PropTypes = require('prop-types')

class Message extends React.Component {

  renderTime(time) {
    const timeObject = new Date(time)
    return `${timeObject.getFullYear()}-${timeObject.getMonth() + 1}-${timeObject.getDate()} ${timeObject.getHours()}:${timeObject.getMinutes()}`
  }

  render() {
    const { user, time, text } = this.props.message

    return (
      <li>
        <div>
          <span>{user}</span>
          <span>{this.renderTime(time)}</span>
          <p>{text}</p>
        </div>
      </li>
    )
  }
}

Message.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })
}

module.exports = Message
