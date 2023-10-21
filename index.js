const express = require('express')

const app = express()

app.get('/', function (req, res) {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('Hello world')
})

app.get('/second', function (req, res) {
    res.send('My Second Page!')
})

app.listen(3000, function () {
    console.log('I am awake!')
})
