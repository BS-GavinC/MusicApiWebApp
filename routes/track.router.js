const trackController = require('../controllers/track.controller');

const trackRouter = require('express').Router();

// Ici nous checkons les routes et leur verb HTTP pour determiner vers quel methodes
// nous allons etre redirigé dans nos controllers
// ex : /api/genre/1 en GET renvoi vers genreController.GetById(id)
trackRouter.route('/')
    .get(trackController.getAll)
    .post(trackController.create)


trackRouter.route('/:id')
    .get(trackController.getById)
    .put(trackController.update)
    .delete(trackController.delete)

module.exports = trackRouter;