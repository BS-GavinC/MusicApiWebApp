const albumDTO = require("../dto/album.dto");
const db = require("../models");



const albumService = {

    getAll : async (limit, offset) => {

        const {rows, count} = await db.Album.findAndCountAll({
            limit : limit,
            offset : offset
        });

        return {
            albums : rows.map(album => new albumDTO(album)),
            count : count
        }
    },

    getById : async (id) => {

        const album = await db.Album.findByPk(id);

        return album ? new albumDTO(album) : null;
        
    }, 

    create : async (albumToAdd) => {
        const album = await db.Album.create(albumToAdd);

        return album ? new albumDTO(album) : null;

    },

    update : async (id, albumToUpdate) => {
        const updatedRows = await db.Album.update(albumToUpdate, {
            where : {id : id}
        });

        return updatedRows[0] === 1;
    },

    delete : async (id) => {
        const deletedRows = await db.Album.destroy({
            where : {id : id}
        });

        return deletedRows === 1;
    }

}


module.exports = albumService;