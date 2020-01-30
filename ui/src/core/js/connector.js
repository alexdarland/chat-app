const io = require('socket.io-client')
const events = require('../../../../common/events')

const Connector = function (updateState) {
  this.socket = io()
  this.updateState = updateState

  this.socket.on(events.connect, this.handleConnect.bind(this))
  this.socket.on(events.disconnect, this.handleDisconnect.bind(this))
  this.socket.on(events.updateState, this.handleUpdateState.bind(this))
}

Connector.prototype = {
  handleConnect() {
    this.updateState({connected: this.socket.connected})
  },

  handleDisconnect() {
    this.updateState({connected: this.socket.connected})
  },

  handleUpdateState(payload) {
    this.updateState({
      messages: payload.messages || []
    })
  }
}

module.exports = Connector
