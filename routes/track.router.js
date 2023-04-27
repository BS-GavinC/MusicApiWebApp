const trackController = require('../controllers/track.controller');
const pagination = require('../middlewares/pagination.middleware');
const bodyValidator = require('../middlewares/validator.middleware');
const createTrackValidator = require('../validators/track.validator');

const trackRouter = require('express').Router();

// Ici nous checkons les routes et leur verb HTTP pour determiner vers quel methodes
// nous allons etre redirigé dans nos controllers
// ex : /api/genre/1 en GET renvoi vers genreController.GetById(id)
trackRouter.route('/')
    .get(pagination(), trackController.getAll)
    .post(bodyValidator(createTrackValidator) ,trackController.create)


trackRouter.route('/:id')
    .get(trackController.getById)
    .put(trackController.update)
    .delete(trackController.delete)
    
//api/track/1/3
trackRouter.route('/:trackId/artist/:artistId')
    .delete(trackController.removeArtist)
    .post(trackController.addArtist)

trackRouter.route('/:trackId/album/:albumId')
    .delete(trackController.removeAlbum)
    .post(trackController.addAlbum)

module.exports = trackRouter;