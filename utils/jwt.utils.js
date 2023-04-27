// Import de la bibliothèque jsonwebtoken
const jsonwebtoken = require('jsonwebtoken')

// Récupération des variables d'environnement pour la configuration des tokens JWT
const {JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE} = process.env;

// Définition de l'objet jwt qui contient les méthodes generate et decode
const jwt = {

    // Méthode generate : crée un token JWT à partir d'un identifiant et d'un rôle
    generate : ({id, role}) => {

        // Création d'une promesse qui sera résolue avec le token généré ou rejetée en cas d'erreur
        return new Promise((resolve, reject) => {

            // Définition du payload à partir des informations d'identifiant et de rôle
            const payload = {id, role};
            // Récupération du secret JWT à partir de la variable d'environnement
            const secret = JWT_SECRET;
            // Définition des options pour la création du token JWT (algorithme, durée de validité, audience, émetteur)
            const options = {
                algorithm : "HS256",
                expiresIn : "365d",
                audience : JWT_AUDIENCE,
                issuer : JWT_ISSUER
            }

            // Création du token JWT à partir du payload, du secret et des options
            jsonwebtoken.sign(payload, secret ,options ,(error, token) => {
                // Si une erreur se produit lors de la création du token, la promesse est rejetée avec l'erreur correspondante
                if (error) {
                    reject(error);
                }

                // Si la création du token réussit, la promesse est résolue avec le token généré
                resolve(token);
            } )

        });

    },

    // Méthode decode : décrypte un token JWT et retourne son payload
    decode : (token) => {

        // Création d'une promesse qui sera résolue avec le payload du token ou rejetée en cas d'erreur
        return new Promise((resolve, reject) => {

            // Définition des options pour la décryption du token (audience et émetteur)
            const options = {
                issuer : "ELCRAKITO",
                audience : "ELCRAKITO"
            }

            // Décryptage du token JWT à partir du token, du secret et des options
            jsonwebtoken.verify(token, JWT_SECRET, options, (error, payload) => {

                // Si une erreur se produit lors de la décryption du token, la promesse est rejetée avec l'erreur correspondante
                if (error) {


                    reject(error);
                }

                // Si la décryption du token réussit, la promesse est résolue avec le payload décodé
                resolve(payload)

            })

        })

    }

}

// Export de l'objet jwt qui contient les méthodes generate et decode
module.exports = jwt