const {response, request} = require('express')

const albumController = {


    /**
     * recupere tout les albums
     * @param {request} req 
     * @param {response} res 
     */
    getAll : (req, res) => {
        res.sendStatus(501);
    },


    /**
     * crée un nouvel album
     * @param {request} req 
     * @param {response} res 
     */
    create : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * recupere un album par son id
     * @param {request} req 
     * @param {response} res 
     */
    getById : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * modifie un album par son id
     * @param {request} req 
     * @param {response} res 
     */
    update : (req, res) => {
        res.sendStatus(501);
    },

    /**
     * supprimer un album par son id
     * @param {request} req 
     * @param {response} res 
     */
    delete : (req, res) => {
        res.sendStatus(501);
    }

}

module.exports = albumController;