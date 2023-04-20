
const trackRouter = require('express').Router();

// Ici nous checkons les routes et leur verb HTTP pour determiner vers quel methodes
// nous allons etre redirigé dans nos controllers
// ex : /api/genre/1 en GET renvoi vers genreController.GetById(id)
trackRouter.route('/')
    .get((req, res) => {res.sendStatus(501)})
    .post((req, res) => {res.sendStatus(501)})

trackRouter.route('/:id')
    .get((req, res) => {res.sendStatus(501)})
    .put((req, res) => {res.sendStatus(501)})
    .delete((req, res) => {res.sendStatus(501)})

module.exports = trackRouter;