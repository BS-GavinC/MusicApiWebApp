const trackDTO = require("../dto/track.dto");
const db = require("../models");


const trackService = {

    getAll : async (limit, offset) => {
        const {rows, count} = await db.Track.findAndCountAll({
            limit : limit,
            offset : offset
        });

        return {
            tracks : rows.map(track => new trackDTO(track)),
            count : count
        }
    },

    getById : async (id) => {
        const track = await db.Track.findByPk(id, {
            include: [db.Genre, db.Album, db.Artist]
        });
        
        return track ? new trackDTO(track) : null;
    },

    create : async (trackToAdd) => {
        let track;
        const transaction = await db.sequelize.transaction();

        try {

            track = await db.Track.create(trackToAdd, {transaction : transaction});

            await track.addAlbum(trackToAdd.albums, {transaction : transaction});


            // Definir la valeur d'une colonne de la table intermediaire.
            for (const artist of trackToAdd.artists) {
                await track.addArtist(artist.id, {through: {feat : artist.feat} , transaction : transaction})
            }

            // await track.addArtist(trackToAdd.artists, {transaction : transaction});

            await transaction.commit()

            const addedTrack = await db.Track.findByPk(track.id, {
                include : [db.Genre, db.Artist, db.Album]
            })

            return addedTrack ? new trackDTO(addedTrack) : null
            
        } catch (error) {

            console.log(error)

            await transaction.rollback()

            return null;
        }
        
    },

    update : async (id, trackToUpdate) => {
        const updatedRows = await db.Track.update(trackToUpdate, {
            where : {id : id}
        });

        return updatedRows[0] === 1;
    },

    delete : async (id) => {
        const deletedRows = await db.Track.destroy({
            where : {id : id}
        })

        return deletedRows === 1;
    },

    addArtist : async (trackId, artistId, data) => {
        try {

            const track = await db.Track.findByPk(trackId);

            await track.addArtist(artistId, {through : {feat : data?.feat}})
            
            return true;

        } catch (error) {

            console.log(error)

            return false;
        }
    },

    removeArtist : async (trackId, artistId) => {
        try {

            const track = await db.Track.findByPk(trackId);

            await track.removeArtist(artistId)
            
            return true;

        } catch (error) {

            console.log(error)

            return false;
        }

    },

    addAlbum : async (trackId, albumId) => {
        try {

            const track = await db.Track.findByPk(trackId);

            await track.addAlbum(albumId)
            
            return true;

        } catch (error) {

            console.log(error)

            return false;
        }
    },

    removeAlbum : async (trackId, albumId) => {
        try {

            const track = await db.Track.findByPk(trackId);

            await track.removeAlbum(albumId)
            
            return true;

        } catch (error) {

            console.log(error)

            return false;
        }

    }

}

module.exports = trackService;