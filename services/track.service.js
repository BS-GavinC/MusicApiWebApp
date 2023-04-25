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
        const track = await db.Track.findByPk(id);
        
        return track ? new trackDTO(track) : null;
    },

    create : async (trackToAdd) => {
        const track = await db.Track.create(trackToAdd);

        return track ? new trackDTO(track) : null;
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
    }

}

module.exports = trackService;