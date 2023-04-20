const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * 
 * @param {Sequelize} sequelize 
 * @returns {ModelStatic<any>}
 */
module.exports = (sequelize) => {
    const Track = sequelize.define('Track',
    {
        title : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        duration : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    }
    )


    return Track;
}