const React = require('react')
const PropTypes = require('prop-types')

class Message extends React.Component {

  renderTime(time) {
    const timeObject = new Date(time)
    return `${timeObject.getFullYear()}-${timeObject.getMonth() + 1}-${timeObject.getDate()} ${timeObject.getHours()}:${timeObject.getMinutes()}`
  }

  render() {
    const { username, time, text } = this.props.message

    return (
      <li>
        <div>
          <span>{username}</span>
          <span>{this.renderTime(time)}</span>
          <p>{text}</p>
        </div>
      </li>
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