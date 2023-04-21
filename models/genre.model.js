const { Sequelize, DataTypes, ModelStatic } = require("sequelize")

/**
 * Constructeur du modele Genre
 * @param {Sequelize} sequelize 
 * @returns {ModelStatic<any>}
 */
module.exports = (sequelize) => {
    
    const Genre = sequelize.define('Genre', {
        name : {
            type : DataTypes.STRING(50),
            allowNull : false,
            unique : 'UK_Genre_Name'
        }
    },
    {
        //Le nom par defaut sera le nom du model au pluriel sauf si nous l'explicitons ici.
        tableName : 'Genre',

        timestamps : false
    })

    return Genre;

}