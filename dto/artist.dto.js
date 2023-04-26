const trackArtistDTO = require("./track_artist.dto");

class artistDTO{
    constructor({id, name, surname, birthdate, deathdate, Tracks}){
        this.id = id;
        this.name = name ?? null; // Coalesce
        this.surname = surname ?? null;
        this.birthdate = birthdate;
        this.deathdate = deathdate ?? null;
        this.tracks = Tracks?.map(t => new trackArtistDTO(t))
    }
}

module.exports = artistDTO