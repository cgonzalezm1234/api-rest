'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HeroeSchema = new Schema({

    nombre: {
        type: String,
        required: true,
        max: 100
    },
    bio: {
        type: String,
        required: true,
        max: 100
    },
    img: {
        type: String,
        required: true,
        max: 100
    },
    aparicion: {
        type: String,
        required: true,
        max: 100
    },
    casa: {
        type: String,
        required: true,
        max: 100
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

module.exports = mongoose.model('Heroe', HeroeSchema)