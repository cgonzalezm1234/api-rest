'use strict'

const express = require('express')
const config = require('./../config')
const api = express.Router()
const heroeController = require('./../controllers/heroe.controller')
const multer = require('multer')
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.src + 'assets/img')
    },
    filename: function(req, file, cb) {
        cb(null, getFecha() + file.originalname);
    }
})
const upload = multer({ storage })

function getFecha() {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (month < 10) {
        return `${year}0${month}${day}`
    } else {
        return `${year}${month}${day}`
    }
}

api.get('/GetHeroes', heroeController.GetHeroes)
api.get('/GetHeroeById/:heroeId', heroeController.GetHeroeById)
api.post('/CreateHeroe', upload.single('file'), heroeController.CreateHeroe)
api.delete('/DeleteHeroeById/:heroeId', heroeController.DeleteHeroeById)
api.put('/UpdateHeroe', upload.single('file'), heroeController.UpdateHeroe)

module.exports = api