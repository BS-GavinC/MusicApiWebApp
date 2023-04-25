const { Request, Response } = require("express");
const userService = require("../services/user.service")
const { successArrayResponse, successResponse } = require("../utils/success.response")


const userController = {


    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    getAll : async (req, res) => {

        const {limit, offset} = req.pagination;

        const {users, count} = await userService.getAll(limit, offset)
        
        res.status(200).json(new successArrayResponse(users, count, req))
    },

    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    getById : async (req, res) => {
        const {id} = req.params

        const user = await userService.getById(id);

        if (!user) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(new successResponse(user))

    },

    getByEmail : async (req, res) => {
        const {email} = req.params

        const user = await userService.getByEmail(email);

        if (!user) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(new successResponse(user))

    },

    update : async (req, res) => {
        const {id} = req.params;
        const data = req.body;

        const isUpdated = await userService.update(id, data);

        res.sendStatus(isUpdated ? 204 : 400)

    },

    delete : async (req, res) => {
        const {id} = req.params;

        res.sendStatus(await userService.delete(id) ? 204 : 400)
    }

}

module.exports = userController