const {response, request} = require('express')

const genreController = {
    /**
     * Recupere tout les genres
     * @param {request} req 
     * @param {response} res 
     */
    getAll : (req, res) => {
        res.sendStatus(501);
    },


    /**
     * Crée un nouveau genre
     * @param {request} req 
     * @param {response} res 
     */
    create : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * recupere un genre par son id
     * @param {request} req 
     * @param {response} res 
     */
    getById : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * modifie une genre par son id
     * @param {request} req 
     * @param {response} res 
     */
    update : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * supprimer un genre par son id
     * @param {request} req 
     * @param {response} res 
     */
    delete : (req, res) => {
        res.sendStatus(501);
    }
}

module.exports = genreController;