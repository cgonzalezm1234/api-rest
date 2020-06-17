'use strict'

const express = require('express')
const api = express.Router()
const heroeController = require('./../controllers/heroe.controller')
const path = require('path')
const multer = require('multer')
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/Users/macbookair/Desktop/Angular/02-spa/src/assets/img')
    },
    // By default, multer removes file extensions so let's add them back
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