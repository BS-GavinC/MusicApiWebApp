const {response, request} = require('express');
const trackService = require('../services/track.service');

const trackController = {
    /**
     * Recupere tout les tracks
     * @param {request} req
     * @param {response} res
     */
    getAll : async (req, res) => {
        const tracks = await trackService.getAll();

        res.status(200).json(tracks)

    },


    /**
     * Crée un nouveau track
     * @param {request} req 
     * @param {response} res 
     */
    create : async (req, res) => {
        const data = req.body

        const track = await trackService.create(data);

        if (!track) {
            res.sendStatus(400);
            return;
        }

        res.status(201).json(track)

    },

    /**
     * recupere un track par son id
     * @param {request} req 
     * @param {response} res 
     */
    getById : async (req, res) => {
        const id = req.params.id;

        const track = await trackService.getById(id);

        if (!track) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(track)
    },

    /**
     * modifie une track par son id
     * @param {request} req 
     * @param {response} res 
     */
    update : async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        res.sendStatus(await trackService.update(id, data) ? 204 : 400)
    },

    /**
     * supprimer un track par son id
     * @param {request} req 
     * @param {response} res 
     */
    delete : async (req, res) => {
        const id = req.params.id;

        res.sendStatus(await trackService.delete(id) ? 204 : 400)
    }
}

module.exports = trackController;