const { Sequelize } = require("sequelize")


const {DB_DATABASE, DB_SERVER, DB_USERNAME, DB_PASSWORD} = process.env

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_SERVER,
    dialect : 'mysql'
})

const db = {};

db.sequelize = sequelize;

db.Genre = require('./genre.model')(sequelize)
db.Artist = require('./artist.model')(sequelize)
db.Album = require('./album.model')(sequelize)
db.Track = require('./track.model')(sequelize)
db.MM_Artist_Track = require('./mm_artist_track.model')(sequelize)


db.Genre.hasMany(db.Track);
db.Track.belongsTo(db.Genre);

db.Track.belongsToMany(db.Album, {through : 'MM_Album_Track'});
db.Album.belongsToMany(db.Track, {through : 'MM_Album_Track'});

db.Track.belongsToMany(db.Artist, {through : db.MM_Artist_Track});
db.Artist.belongsToMany(db.Track, { through : db.MM_Artist_Track});

module.exports = db;

