const state = require('./state')
const events = require('../common/events')

const RequestHandler = function(io, socket) {
  this.io = io
  this.socket = socket

  this.socket.emit(events.updateState, state)
}

module.exports = RequestHandler
