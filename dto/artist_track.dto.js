

class artistTrackDTO{
    constructor({id, name, surname, MM_Artist_Track}){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.feat = MM_Artist_Track ? MM_Artist_Track.feat : null
    }
}

module.exports = artistTrackDTO