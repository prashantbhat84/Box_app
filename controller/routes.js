'use strict';
class Route {
    constructor() {
        this.test = this.test.bind(this);

    }
    async test(req, res, next) {

        return res.status(200).json({ status: 200, Message: "Success", result: "done" })
    }



}
export default Route;