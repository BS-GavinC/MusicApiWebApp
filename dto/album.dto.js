const trackDTO = require("./track.dto");

class albumDTO{

    constructor({id, title, cover, Tracks}){
        this.id = id;
        this.title = title;
        this.cover = cover ?? null;
        this.tracks = Tracks?.map(t => new trackDTO(t))
    }
}

module.exports = albumDTO;