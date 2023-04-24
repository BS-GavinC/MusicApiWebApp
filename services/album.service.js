const albumDTO = require("../dto/album.dto");
const db = require("../models");



const albumService = {

    getAll : async () => {
        const albums = await db.Album.findAll();

        return albums.map(a => new albumDTO(a))
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