
const albumController = require('../controllers/album.controller');
const pagination = require('../middlewares/pagination.middleware');

const albumRouter = require('express').Router();

// Ici nous checkons les routes et leur verb HTTP pour determiner vers quel methodes
// nous allons etre redirigé dans nos controllers
// ex : /api/genre/1 en GET renvoi vers genreController.GetById(id)
albumRouter.route('/')
    .get(pagination({maxLimit : 20, defaultLimit : 10}), albumController.getAll)
    .post(albumController.create)

albumRouter.route('/:id')
    .get(albumController.getById)
    .put(albumController.update)
    .delete(albumController.delete)

albumRouter.route('/:albumId/track/:trackId')
    .post(albumController.addTrack)
    .delete(albumController.removeTrack)

module.exports = albumRouter;