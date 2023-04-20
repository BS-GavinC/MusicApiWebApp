const {response, request} = require('express')

const artistController = {


    /**
     * recupere tout les artist
     * @param {request} req 
     * @param {response} res 
     */
    getAll : (req, res) => {
        res.sendStatus(501);
    },


    /**
     * crée un nouvel artist
     * @param {request} req 
     * @param {response} res 
     */
    create : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * recupere un artist par son id
     * @param {request} req 
     * @param {response} res 
     */
    getById : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * modifie un artist par son id
     * @param {request} req 
     * @param {response} res 
     */
    update : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * supprimer un artist par son id
     * @param {request} req 
     * @param {response} res 
     */
    delete : (req, res) => {
        res.sendStatus(501);
    }

}

module.exports = artistController;