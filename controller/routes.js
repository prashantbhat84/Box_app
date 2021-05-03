'use strict';
import ResponseHandler from '../utils/ResponseHandler.js'
const response = new ResponseHandler();
console.log(response)
class Route {
    constructor() {
        this.test = this.test.bind(this);

    }
    async test(req, res, next) {
        const response1 = response.makeResult(200, "Done");
        console.log({ response1 })
        return res.status(200).json(response1)
    }



}
export default Route;