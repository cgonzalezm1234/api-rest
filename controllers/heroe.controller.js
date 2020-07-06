'use strict'

const Heroe = require('./../models/heroe')
const config = require('./../config')


async function GetHeroes(req, res, next) {
    try {
        const heroes = await Heroe.find({});
        if (heroes) res.send(200, { heroes });
        else res.status(404).send({ message: `no se encontró información` })
    } catch (e) {
        res.status(500).send({ message: `ocurrió un error al realizar la petición` })
    }
}

async function GetHeroeById(req, res) {
    try {
        const heroe = await Heroe.findById(req.params.heroeId)
        if (heroe) res.send(200, { heroe })
        else res.status(404).send({ message: `no se encontró información` })
    } catch (e) {
        res.status(500).send({ message: `ocurrió un error al realizar la petición` })
    }
}

async function CreateHeroe(req, res) {

    try {
        let heroe = new Heroe(req.body)
        heroe.img = await req.file.path.split(config.src).join('')
        await heroe.save();
        res.send(200, { heroe })
    } catch (e) {
        res.status(500).send({ message: `ocurrió un error al realizar la petición` })
    }
}


async function UpdateHeroe(req, res) {
    try {
        let heroeId = req.body.id
        let update = req.body
        update.img = await req.file.path.split(config.src).join('')
        const result = await Heroe.findByIdAndUpdate(heroeId, update, { new: true })
        res.status(200).send({ heroe: result })
    } catch (e) {
        res.status(500).send({ message: `ocurrió un error al realizar la petición` })
    }
}

async function DeleteHeroeById(req, res) {
    try {
        const heroe = await Heroe.findById(req.params.heroeId)
        await heroe.remove()
        res.status(200).send({ message: `El héroe ha sido eliminado` })
    } catch (e) {
        res.status(500).send({ message: `ocurrió un error al realizar la petición` })
    }
}

module.exports = {
    GetHeroes,
    GetHeroeById,
    CreateHeroe,
    DeleteHeroeById,
    UpdateHeroe
}