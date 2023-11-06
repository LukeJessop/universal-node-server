const express = require('express')

const app = express()

app.get('/ping', () => 'pong')

const port = 4040
app.listen(port, console.log('Server up on port: ' + port))