const { Sequelize, ModelStatic, DataTypes } = require("sequelize");


/**
 * 
 * @param {Sequelize} sequelize 
 * @returns {ModelStatic<any>}
 */
module.exports = (sequelize) => {
    const Artist = sequelize.define(
        'Artist',
        {
            name : {
                type : DataTypes.STRING(50)
            },
            surname : {
                type : DataTypes.STRING(50)
            },
            birthdate : {
                type : DataTypes.DATE,
                allowNull : false
            },
            deathdate : {
                type : DataTypes.DATE
            }
        }
    )


    return Artist;
}