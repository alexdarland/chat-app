const state = require('./state')
const events = require('../common/events')

const RequestHandler = function(io, socket) {
  this.io = io
  this.socket = socket

  this.socket.on(events.sendMessage, this.handleSendMessage.bind(this))

  this.socket.emit(events.updateState, state)
}

RequestHandler.prototype = {
  handleSendMessage(payload) {
    const message = {
      id: payload.id,
      username: payload.username,
      time: Date.now(),
      text: payload.text
    }

    state.messages.push(message)
    this.io.emit(events.newMessageAdded, message)
  }
}

module.exports = RequestHandler
