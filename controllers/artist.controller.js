const {response, request} = require('express');
const { get } = require('../routes');
const artistService = require('../services/artist.service');
const { successArrayResponse, successResponse } = require('../utils/success.response');

const artistController = {


    /**
     * recupere tout les artist
     * @param {request} req 
     * @param {response} res 
     */
    getAll : async (req, res) => {
        const {artists, count} = await artistService.getAll();

        res.status(200).json(new successArrayResponse(artists, count))
    },


    /**
     * crée un nouvel artist
     * @param {request} req 
     * @param {response} res 
     */
    create : async (req, res) => {
        const data = req.body;

        if (!(data.name || data.surname) || !data.birthdate) {
           res.sendStatus(400);
           return; 
        }

        const artist = await artistService.create(data);

        if (!artist) {
            res.sendStatus(400);
            return; 
        }

        res.status(201).json(new successResponse(artist, 201))
    },

    /**
     * recupere un artist par son id
     * @param {request} req 
     * @param {response} res 
     */
    getById : async (req, res) => {
        const id = req.params.id;

        const artist = await artistService.getById(id);

        if (!artist) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new successResponse(artist))
    },

    /**
     * modifie un artist par son id
     * @param {request} req 
     * @param {response} res 
     */
    update : async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        if (!(data.name || data.surname) || !data.birthdate) {
            res.sendStatus(400);
            return; 
        }
        res.sendStatus(await artistService.update(id, data) ? 204 : 400);

        // const isUpdate = await artistService.update(id, data);

        // if (!isUpdate) {
        //     res.sendStatus(400);
        //     return;
        // }

        // res.sendStatus(204)
    },

    /**
     * supprimer un artist par son id
     * @param {request} req 
     * @param {response} res 
     */
    delete : async (req, res) => {
        const id = req.params.id;

        res.sendStatus(await artistService.delete(id) ? 204 : 400)
    }

}

module.exports = artistController;