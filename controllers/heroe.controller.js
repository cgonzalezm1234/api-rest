'use strict'

const Heroe = require('./../models/heroe');

function GetHeroes(req, res, next) {

    Heroe.find({}, (err, heroes) => {
        if (err) return res.status(500).send({ message: `ocurrió un error al realizar la petición` });
        if (!heroes) return res.status(404).send({ message: `no se encontró información` });

        res.send(200, { heroes });
    });
}

function GetHeroeById(req, res) {

    let heroeId = req.params.heroeId;
    Heroe.findById(heroeId, (err, heroe) => {
        if (err) return res.status(500).send({ message: `ocurrió un error al realizar la petición` });
        if (!heroe) return res.status(404).send({ message: `no se encontró información` });

        res.send(200, { heroe });
    });
}

function CreateHeroe(req, res) {
    let heroe = new Heroe(req.body);
    heroe.save((err, heroeSave) => {
        if (err) return res.status(500).send({ message: `ocurrió un error al realizar la petición` });
        res.status(200).send({ heroe: heroeSave });
    });
}

function UpdateHeroeById(req, res) {

    let heroeId = req.params.heroeId;
    let update = req.body;

    Heroe.findByIdAndUpdate(heroeId, update, { new: true }, (err, result) => {
        if (err) return res.status(500).send({ message: `ocurrió un error al realizar la petición` });
        res.status(200).send({ heroe: result });
    });
}

function DeleteHeroeById(req, res) {

    let heroeId = req.params.heroeId;

    Heroe.findById(heroeId, (err, heroe) => {
        if (err) return res.status(500).send({ message: `ocurrió un error al realizar la petición` });
        if (!heroe) return res.status(404).send({ message: `no se encontró información` });

        heroe.remove(err => {
            if (err) return res.status(500).send({ message: `ocurrió un error al realizar la petición` });
            res.status(200).send({ message: `El héroe ha sido eliminado` });
        });
    });
}

module.exports = {
    GetHeroes,
    GetHeroeById,
    CreateHeroe,
    UpdateHeroeById,
    DeleteHeroeById
};