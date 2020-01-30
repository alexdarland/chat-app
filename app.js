const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const events = require('./common/events')
const EventHandler = require('./utils/event-handler')

// File requests
app.get('/', function (req, res) { res.sendFile(__dirname + '/ui/dist/index.html') })
app.get('/ui/dist/main.css', function (req, res) { res.sendFile(__dirname + '/ui/dist/main.css') })
app.get('/ui/dist/main.js', function (req, res) { res.sendFile(__dirname + '/ui/dist/main.js') })

io.on(events.connection, function (socket) {
  new EventHandler(io, socket)
})

server.listen(80)
