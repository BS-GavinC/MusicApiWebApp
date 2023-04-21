const {response, request} = require('express')

const trackController = {
    /**
     * Recupere tout les tracks
     * @param {request} req
     * @param {response} res
     */
    getAll : (req, res) => {
        res.sendStatus(501)

    },


    /**
     * Crée un nouveau track
     * @param {request} req 
     * @param {response} res 
     */
    create : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * recupere un track par son id
     * @param {request} req 
     * @param {response} res 
     */
    getById : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * modifie une track par son id
     * @param {request} req 
     * @param {response} res 
     */
    update : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * supprimer un track par son id
     * @param {request} req 
     * @param {response} res 
     */
    delete : (req, res) => {
        res.sendStatus(501);
    }
}

module.exports = trackController;