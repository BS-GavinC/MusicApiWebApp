
const albumController = require('../controllers/album.controller');

const albumRouter = require('express').Router();

// Ici nous checkons les routes et leur verb HTTP pour determiner vers quel methodes
// nous allons etre redirigé dans nos controllers
// ex : /api/genre/1 en GET renvoi vers genreController.GetById(id)
albumRouter.route('/')
    .get(albumController.getAll)
    .post(albumController.create)

albumRouter.route('/:id')
    .get(albumController.getById)
    .put(albumController.update)
    .delete(albumController.delete)

module.exports = albumRouter;