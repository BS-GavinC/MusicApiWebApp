const {response, request} = require('express');
const genreService = require('../services/genre.service');
const {successArrayResponse, successResponse} = require('../utils/success.response');

const genreController = {
    /**
     * Recupere tout les genres
     * @param {request} req 
     * @param {response} res 
     */
    getAll : async (req, res) => {

        const {limit, offset} = req.pagination
        
        const {genres, count} = await genreService.getAll(limit, offset)

        res.status(200).json(new successArrayResponse(genres, count, req));

    },


    /**
     * Crée un nouveau genre
     * @param {request} req 
     * @param {response} res 
     */
    create : async (req, res) => {
        
        const data = req.body;

        const alreadyExist = await genreService.alreadyExist(data.name)

        if (alreadyExist) {
            res.sendStatus(400)
            return;
        }

        const genre = await genreService.create(data);

        if (!genre) {
            res.sendStatus(400)
            return;
        }

        res.location('/genre/' + genre.id)

        res.status(201).json(new successResponse(genre, 201))

    },

    /**
     * recupere un genre par son id
     * @param {request} req 
     * @param {response} res 
     */
    getById : async (req, res) => {
        const genre = await genreService.getById(req.params.id)

        if (!genre) {
            res.sendStatus(404)
            return;
        }
            res.status(200).json(new successResponse(genre))
        
        

    },

    /**
     * modifie une genre par son id
     * @param {request} req 
     * @param {response} res 
     */
    update : async (req, res) => {

        const alreadyExist = await genreService.alreadyExist(req.body.name)

        if (alreadyExist) {
            res.sendStatus(400)
            return;
        }
        const isUpdate = await genreService.update(req.params.id, req.body);

        isUpdate ? res.sendStatus(204) : res.sendStatus(400)
        
    },

    /**
     * supprimer un genre par son id
     * @param {request} req 
     * @param {response} res 
     */
    delete : async (req, res) => {
        const isDelete = await genreService.delete(req.params.id)

        if (!isDelete) {
            res.sendStatus(400)
        }
        else
        {
            res.sendStatus(204);
        }

        
    }
}

module.exports = genreController;