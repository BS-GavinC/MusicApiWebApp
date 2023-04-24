class successResponse{
    constructor(data, code = 200){
        this.result = data;
        this.statusCode = code;
    }
}

class successArrayResponse{
    constructor(data, count, code = 200){
        this.result = data;
        this.count = count;
        this.statusCode = code;
    }
}


module.exports = {successResponse, successArrayResponse}