const trackController = require('../controllers/track.controller');
const pagination = require('../middlewares/pagination.middleware');

const trackRouter = require('express').Router();

// Ici nous checkons les routes et leur verb HTTP pour determiner vers quel methodes
// nous allons etre redirigé dans nos controllers
// ex : /api/genre/1 en GET renvoi vers genreController.GetById(id)
trackRouter.route('/')
    .get(pagination(), trackController.getAll)
    .post(trackController.create)


trackRouter.route('/:id')
    .get(trackController.getById)
    .put(trackController.update)
    .delete(trackController.delete)
    .post(trackController.addArtist)
//api/track/1/3
trackRouter.route('/:trackId/:artistId')
    .delete(trackController.removeArtist)

module.exports = trackRouter;