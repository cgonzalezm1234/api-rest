'use strict'

const express = require('express');
const api = express.Router();
const heroeController = require('./../controllers/heroe.controller');

api.get('/GetHeroes', heroeController.GetHeroes);
api.get('/GetHeroeById/:heroeId', heroeController.GetHeroeById);
api.post('/CreateHeroe', heroeController.CreateHeroe);
api.put('/UpdateHeroeById/:heroeId', heroeController.UpdateHeroeById);
api.delete('/DeleteHeroeById/:heroeId', heroeController.DeleteHeroeById);

module.exports = api;