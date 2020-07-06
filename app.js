'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes')
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app