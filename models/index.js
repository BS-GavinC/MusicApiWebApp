const { Sequelize } = require("sequelize")

// Recuperation des variables d'environnement
const {DB_DATABASE, DB_SERVER, DB_USERNAME, DB_PASSWORD} = process.env


// Creation de l'objet sequelize et creation de la connection
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_SERVER,
    dialect : 'mysql'
})

//Creation de l'objet DB Que nous allons manipuler
const db = {};

// Integration de notre objet sequelize a notre objet DB
db.sequelize = sequelize;


// Mise en place des modeles dans notre DB
db.Genre = require('./genre.model')(sequelize)
db.Artist = require('./artist.model')(sequelize)
db.Album = require('./album.model')(sequelize)
db.Track = require('./track.model')(sequelize)
db.MM_Artist_Track = require('./mm_artist_track.model')(sequelize)
db.User = require('./user.model')(sequelize)
// Generation des liens entre les tables
//One to Many
db.Genre.hasMany(db.Track);
db.Track.belongsTo(db.Genre);

//Many to Many
db.Track.belongsToMany(db.Album, {through : 'MM_Album_Track'});
db.Album.belongsToMany(db.Track, {through : 'MM_Album_Track'});


//Many to Many
db.Track.belongsToMany(db.Artist, {through : db.MM_Artist_Track});
db.Artist.belongsToMany(db.Track, { through : db.MM_Artist_Track});

db.User.belongsToMany(db.Track, {through : 'MM_User_Track'})
db.Track.belongsToMany(db.User, {through : 'MM_User_Track'})

module.exports = db;

