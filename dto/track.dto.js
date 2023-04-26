const albumDTO = require("./album.dto");
const albumTrackDTO = require("./album_track.dto");
const artistTrackDTO = require("./artist_track.dto");

class trackDTO{
    constructor({id, title, duration, Genre, Albums, Artists}){
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.Genre = Genre;
        this.Albums = Albums?.map(album => new albumTrackDTO(album));
        this.Artists = Artists?.map(a => new artistTrackDTO(a))
    }
}

module.exports = trackDTO