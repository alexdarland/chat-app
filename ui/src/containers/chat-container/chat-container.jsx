import React from 'react'

class ChatApp extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    )
  }
}

module.exports = ChatApp
