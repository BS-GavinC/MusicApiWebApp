const yup = require('yup')

const createTrackValidator = yup.object({
    title : yup.string().max(100).trim().required(),
    duration : yup.number().positive().integer().required(),
    GenreId : yup.number().positive().integer().required(),
    albums : yup.array().of(
                yup.number().integer().positive()
            ).required(),
    artists : yup.array().of(
        yup.object({
            id : yup.number().positive().integer().required(),
            feat : yup.boolean()
        })
    ).required().min(1)
})

module.exports = createTrackValidator

// {
// 	"title" : "Les dev oué oué",
// 	"duration" : 145,
// 	"GenreId" : 1,
// 	"albums" : [3],
// 	"artists" : [
// 				{ "id" : 1 },
// 				{ "id" : 3,  "feat" : true  } 
// 	]
// }