const io = require('socket.io-client')
const events = require('../../../../common/events')

const Connector = function (updateState) {
  this.socket = io()
  this.updateState = updateState

  this.socket.on(events.connect, this.handleConnect.bind(this))
  this.socket.on(events.disconnect, this.handleDisconnect.bind(this))
  this.socket.on(events.updateState, this.handleUpdateState.bind(this))
  this.socket.on(events.newMessageAdded, this.handleNewMessageAdded.bind(this))
}

Connector.prototype = {
  handleConnect() {
    this.updateState({
      isConnected: this.socket.connected
    }, true)
  },

  handleDisconnect() {
    this.updateState({
      isConnected: this.socket.connected
    }, true)
  },

  handleUpdateState(payload) {
    this.updateState({
      messages: payload.messages || []
    }, true)
  },

  handleNewMessageAdded(payload) {
    this.updateState({
      messages: [payload] || []
    }, false)
  },

  postMessage(id, username, text) {
    this.socket.emit(events.sendMessage, { id, username, text })
  },


}

module.exports = Connector
