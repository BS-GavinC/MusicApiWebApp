class albumDTO{
    constructor({id, title, cover}){
        this.id = id;
        this.title = title;
        this.cover = cover ?? null;
    }
}

module.exports = albumDTO;