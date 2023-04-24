// Requiert l'objet de transfert de données genreDTO
const genreDTO = require("../dto/genre.dto");

// Requiert les modèles de la base de données
const db = require("../models");


// Crée un objet pour stocker toutes les fonctions de service de genre
const genreService = {


    // Obtenir tous les genres de la base de données
    getAll : async () => {

        // Récupère tous les genres de la base de données
        //const genres = await db.Genre.findAll();

        const {rows, count} = await db.Genre.findAndCountAll();

        // Renvoie les genres sous forme d'objets genre DTO
        //return genres.map(genre => new genreDTO(genre))

        return {
            genres : rows.map(genre => new genreDTO(genre)),
            count : count
        }

        

    },
    // Obtenir un seul genre par son ID
    getById : async (id) => {
        // Récupérer le genre de la base de données
        const genre = await db.Genre.findByPk(id);
        // Renvoie le genre sous forme d'objet genre DTO s'il existe, sinon renvoie null
        return genre ? new genreDTO(genre) : null;
    },
    // Créer un nouveau genre dans la base de données
    create : async (genreToAdd) => {
        // Crée le genre dans la base de données
        const genre = await db.Genre.create(genreToAdd);
        // Renvoie le genre sous forme d'objet genre DTO s'il existe, sinon renvoie null
        return genre ? new genreDTO(genre) : null;
    },
    // Mettre à jour un genre existant dans la base de données
    update : async (id, genreToUpdate) => {
        // Met à jour le genre dans la base de données
        const updateRows = await db.Genre.update(genreToUpdate, {
            where : {id}
        });
        // Renvoie true si la mise à jour a réussi, sinon renvoie false
        return updateRows[0] === 1
    },
    // Supprimer un genre existant dans la base de données
    delete : async (id) => {
        // Supprime le genre de la base de données
        const deletedRows = await db.Genre.destroy({
            where : {id}
        })
        // Renvoie true si la suppression a réussi, sinon renvoie false
        return deletedRows === 1;
    },
    // Vérifie si un genre existe déjà dans la base de données
    alreadyExist : async (newName) => {
        // Récupérer le genre de la base de données
        const genre = await db.Genre.findOne({where : {name : newName}})
        // Renvoie true si le genre existe, sinon renvoie false
        return !!genre
    }
}
// Exporte l'objet de service genre
module.exports = genreService;