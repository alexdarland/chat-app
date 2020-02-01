const idGenerator = require('../common/id-generator')

module.exports = {
  messages: [
    {
      id: idGenerator.generateId(),
      username: 'System',
      time: Date.now(),
      text: 'Welcome to the Chat App!'
    }
  ]
}
