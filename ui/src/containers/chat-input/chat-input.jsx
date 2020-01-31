const React = require('react')
const PropTypes = require('prop-types')

class ChatInput extends React.Component {
  constructor(props) {
    super(props)
    this.inputReference = React.createRef();

    this.state = {
      message: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()

    if(this.state.message.length > 0) {
      this.props.postMessage(this.state.message)
      this.inputReference.current.value = ''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input name="chat-input" type='text' autoComplete='off' onChange={this.handleInputChange} ref={this.inputReference}/>
        <input type="submit" value="Send"/>
      </form>
    )
  }
}

ChatInput.propTypes = {
  postMessage: PropTypes.func
}

module.exports = ChatInput
