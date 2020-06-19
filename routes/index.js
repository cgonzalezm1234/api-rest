'use strict'

const express = require('express')
const config = require('./../config')
const api = express.Router()
const heroeController = require('./../controllers/heroe.controller')
const path = require('path')
const multer = require('multer')
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.src + 'assets/img')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage })

api.get('/GetHeroes', heroeController.GetHeroes)
api.get('/GetHeroeById/:heroeId', heroeController.GetHeroeById)
api.post('/CreateHeroe', upload.single('file'), heroeController.CreateHeroe)
api.delete('/DeleteHeroeById/:heroeId', heroeController.DeleteHeroeById)
api.put('/UpdateHeroe', upload.single('file'), heroeController.UpdateHeroe)

module.exports = api