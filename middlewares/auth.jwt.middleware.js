const { Request, Response, NextFunction } = require('express')
const errorResponse = require('../utils/error.response')
const jwt = require('../utils/jwt.utils')

const authJwt = () => {


    /**
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    return async (req, res, next) => {

        const bearerToken = req.headers.authorization

        
        if (!bearerToken || bearerToken == '') {
            res.sendStatus(401);
            return;
        }

        const token = bearerToken.split(" ")[1]

        console.log(token);

        try {

            const payload = await jwt.decode(token);

            console.log(payload);

            req.payload = payload
            
        } catch (error) {

            res.status(500).json(new errorResponse(error))
            return;
            
        }

       

        next()

        

    }


}

module.exports = authJwt