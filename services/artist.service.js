const artistDTO = require("../dto/artist.dto");
const db = require("../models");


const artistService = {

    getAll : async () => {
        const artists = await db.Artist.findAll();

        return artists.map(artist => new artistDTO(artist))
    },

    getById : async (id) => {

        const artist = await db.Artist.findByPk(id);

        return artist ? new artistDTO(artist) : null;

    },

    create : async (artistToAdd) => {

        const artist = await db.Artist.create(artistToAdd);

        return artist ? new artistDTO(artist) : null;

    },

    update : async (id, artistToUpdate) => {

        const updatedRows = await db.Artist.update(artistToUpdate, {
            where : {id : id }
        })

        return updatedRows[0] === 1;

    },

    delete : async (id) => {

        const deletedRows = await db.Artist.destroy({
            where : {id : id}
        })

        return deletedRows === 1;

    }


}


module.exports = artistService;