const albumDTO = require("./album.dto");
const artistTrackDTO = require("./artist_track.dto");

class trackDTO{
    constructor({id, title, duration, Genre, Albums, Artists}){
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.Genre = Genre;
        this.Albums = Albums?.map( a => new albumDTO(a));
        this.Artists = Artists?.map(a => new artistTrackDTO(a))
    }
}

module.exports = trackDTO