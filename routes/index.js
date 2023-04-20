const albumRouter = require('./album.router');
const artistRouter = require('./artist.router');
const genreRouter = require('./genre.router');
const trackRouter = require('./track.router');

// import du systeme de routing d'express 
const router = require('express').Router();

// Ici est mis en place toutes les sous routes de l'api qui redirige vers le 
// router en question en fonction de la suite de l'url '/api/???'

router.use('/track', trackRouter)
router.use('/album', albumRouter)
router.use('/genre', genreRouter)
router.use('/artist', artistRouter)

// Export du module que l'on importe dans app.js
module.exports = router;