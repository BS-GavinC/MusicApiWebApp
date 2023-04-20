const genreController = require('../controllers/genre.controller');

const genreRouter = require('express').Router();

// Ici nous checkons les routes et leur verb HTTP pour determiner vers quel methodes
// nous allons etre redirigé dans nos controllers
// ex : /api/genre/1 en GET renvoi vers genreController.GetById(id)
genreRouter.route('/')
    .get(genreController.getAll)
    .post(genreController.create)

genreRouter.route('/:id')
    .get(genreController.getById)
    .put(genreController.update)
    .delete(genreController.delete)

module.exports = genreRouter;