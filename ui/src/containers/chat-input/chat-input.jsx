const React = require('react')
const PropTypes = require('prop-types')
const Icon = require('../../components/icon/icon.jsx')

class ChatInput extends React.Component {
  constructor(props) {
    super(props)
    this.inputReference = React.createRef()

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
      <form className='chat-input' onSubmit={this.handleFormSubmit}>
        <input className='chat-input__text-box' name="chat-input" type='text' autoComplete='off' placeholder='Aa' onChange={this.handleInputChange} ref={this.inputReference}/>
        <button className='chat-input__submit' type='submit'>
          <Icon name='paper-plane'/>
        </button>
      </form>
    )
  }
}

ChatInput.propTypes = {
  postMessage: PropTypes.func
}

module.exports = ChatInput
