class artistDTO{
    constructor({id, name, surname, birthdate, deathdate}){
        this.id = id;
        this.name = name ?? null; // Coalesce
        this.surname = surname ?? null;
        this.birthdate = birthdate;
        this.deathdate = deathdate ?? null;
    }
}

module.exports = artistDTO