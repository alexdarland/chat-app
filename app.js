const app = require('express')()
const server = require('http').Server(app)

// File requests
app.get('/', function (req, res) { res.sendFile(__dirname + '/ui/dist/index.html') })
app.get('/ui/dist/main.css', function (req, res) { res.sendFile(__dirname + '/ui/dist/main.css') })
app.get('/ui/dist/main.js', function (req, res) { res.sendFile(__dirname + '/ui/dist/main.js') })

server.listen(80);
