const artistController = require('../controllers/artist.controller');
const authJwt = require('../middlewares/auth.jwt.middleware');
const pagination = require('../middlewares/pagination.middleware');

const artistRouter = require('express').Router();

// Ici nous checkons les routes et leur verb HTTP pour determiner vers quel methodes
// nous allons etre redirigé dans nos controllers
// ex : /api/genre/1 en GET renvoi vers genreController.GetById
artistRouter.route('/')
    .get(authJwt(), pagination(), artistController.getAll)
    .post(artistController.create)

artistRouter.route('/:id')
    .get(artistController.getById)
    .put(artistController.update)
    .delete(artistController.delete)

artistRouter.route('/:artistId/track/:trackId')
    .post(artistController.addTrack)
    .delete(artistController.removeTrack)


module.exports = artistRouter;