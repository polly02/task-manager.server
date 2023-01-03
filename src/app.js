const express = require("express")
const bodyParser = require("body-Parser")

const app = express()

app.use(bodyParser.json())

app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app