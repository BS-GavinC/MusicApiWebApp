const {response, request} = require('express');
const trackService = require('../services/track.service');
const { successArrayResponse, successResponse } = require('../utils/success.response');

const trackController = {
    /**
     * Recupere tout les tracks
     * @param {request} req
     * @param {response} res
     */
    getAll : async (req, res) => {

        const {limit, offset} = req.pagination
        const {tracks, count} = await trackService.getAll(limit, offset);

        res.status(200).json(new successArrayResponse(tracks, count, req))

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

        res.status(201).json(new successResponse(track, 201))

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

        res.status(200).json(new successResponse(track))
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