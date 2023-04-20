
// Configure dotenv et rend accessible le fichier '.env' 💪
require('dotenv').config();

// Recupere les variables d'environnement ⛵
const {PORT} = process.env;

//Import de notre dossier routes et de router dans 'index.js' 🍣
const router = require('./routes')

// Import de express 
const express = require('express');

// Mise en place de la gestion d'erreur d'express 
require('express-async-errors')

// Execution du serveur express et recuperation de l'app
const app = express();

// Mise en place du middleware de routing qui redirige les requete avec '/api' vers notre router 🛣️
app.use('/api', router);

// Ecoute du serveur sur le port importé depuis l'environnement 🦻
app.listen(PORT, () => {
    console.log(`Server listen on  localhost:${PORT}`);
});