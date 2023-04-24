const {response, request} = require('express');
const albumService = require('../services/album.service');

const albumController = {


    /**
     * recupere tout les albums
     * @param {request} req 
     * @param {response} res 
     */
    getAll : async (req, res) => {
        const albums = await albumService.getAll();

        res.status(200).json(albums)
    },


    /**
     * crée un nouvel album
     * @param {request} req 
     * @param {response} res 
     */
    create : async (req, res) => {
        const data = req.body;

        const album = await albumService.create(data);

        if (!album) {
            res.sendStatus(400);
            return;
        }

        res.location('/album/' + album.id)

        res.status(201).json(album)

    },

    /**
     * recupere un album par son id
     * @param {request} req 
     * @param {response} res 
     */
    getById : async (req, res) => {
        const id = req.params.id;

        const album = await albumService.getById(id);

        if (!album) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(album);
    },

    /**
     * modifie un album par son id
     * @param {request} req 
     * @param {response} res 
     */
    update : async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        res.sendStatus(await albumService.update(id, data) ? 204 : 400);
    },

    /**
     * supprimer un album par son id
     * @param {request} req 
     * @param {response} res 
     */
    delete : async (req, res) => {
        const id = req.params.id;
        res.sendStatus(await albumService.delete(id) ? 204 : 400);
    }

}

module.exports = albumController;