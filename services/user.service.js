const userDTO = require("../dto/user.dto");
const db = require("../models")



const userService = {

    getAll : async (limit, offset) => {
        const {rows, count} = await db.User.findAndCountAll({
            limit : limit, offset : offset
        });

        return {
            users : rows.map(u => new userDTO(u)),
            count
        }

    },

    getById : async (id) => {

        const user = await db.User.findByPk(id);

        return user ? new userDTO(user) : null;

    },

    getByEmail : async (email) => {

        const user = await db.User.findOne({
            where : {email : email}
        });

        return user ? new userDTO(user) : null;

    },

    update : async (id, userToUpdate) => {

        const user = await this.getById(id);

        if (!userToUpdate.email || (userToUpdate.email != user.email && await this.alreadyExist(userToUpdate.email))) {
            return null;
        }

        const updatedRows = await db.User.update(userToUpdate, {
            where : {id : id}
        })

        return updatedRows[0] === 1
    },

    delete : async (deletedRows) => {

        const deletedRows = await db.User.destroy({
            where : {id : id}
        })

        return deletedRows === 1

    },

    alreadyExist : async (email) => {
        const user = await db.User.findOne({
            where : {email : email}
        });
        
        return !!user
    }

}

module.exports = userService