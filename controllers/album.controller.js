const {response, request} = require('express');
const albumService = require('../services/album.service');
const { successResponse, successArrayResponse } = require('../utils/success.response');

const albumController = {


    /**
     * recupere tout les albums
     * @param {request} req 
     * @param {response} res 
     */
    getAll : async (req, res) => {

        const {limit, offset} = req.pagination

        const {albums, count} = await albumService.getAll(limit , offset);

        res.status(200).json(new successArrayResponse(albums, count))
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

        res.status(201).json(new successResponse(album, 201))

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

        res.status(200).json(new successResponse(album));
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