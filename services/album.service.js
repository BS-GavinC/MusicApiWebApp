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

        
        const album = await db.Album.findByPk(id, {
            include : [db.Track]
        });


        return album ? new albumDTO(album) : null;
        
    }, 

    create : async (albumToAdd) => {
        let album;

        const transaction = await db.sequelize.transaction();

        try {

            album = await db.Album.create(albumToAdd, {transaction : transaction});

            await album.addTrack(albumToAdd.tracks, {transaction : transaction});

            await transaction.commit();

            return new albumDTO(album);
            
        } catch (error) {

            console.log(error);

            transaction.rollback();

            return null;
            
        }

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
    },

    addTrack : async (albumId, trackId) => {
        try {

            const album = await db.Album.findByPk(albumId);

            await album.addTrack(trackId);

            return true
            
        } catch (error) {
            console.log(error);

            return false
        }
    },

    removeTrack : async (albumId, trackId) => {
        try {

            const album = await db.Album.findByPk(albumId);

            await album.removeTrack(trackId);

            return true
            
        } catch (error) {
            console.log(error);

            return false
        }
    }

}


module.exports = albumService;