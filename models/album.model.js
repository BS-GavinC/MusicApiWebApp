const { Sequelize, ModelStatic, DataTypes } = require("sequelize");


/**
 * 
 * @param {Sequelize} sequelize 
 * @returns {ModelStatic<any>}
 */
module.exports = (sequelize) => {
    

    const Album = sequelize.define('Album', 
    {
        title : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        cover : {
            type : DataTypes.STRING
        }
    }
    // Par defaut le tableName est egal au ModelName avec un 's' => ici 'Albums'
    )



    return Album;
}