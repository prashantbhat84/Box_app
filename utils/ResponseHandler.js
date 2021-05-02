'use strict';

class ResponseHandler {

    constructor() {
        this.response = {
            http_code: "",
            message: "",
            result: "",
            errors: ""
        }
    }

    badFormat(errors) {
        this.response.http_code = "400";
        this.response.message = "Failure";
        this.response.result = "Bad or ill-formed request..";
        this.response.errors = errors;
        return this.response;
    };

    inputDontMatch() {
        this.response.http_code = "404";
        this.response.message = "Failure";
        this.response.result = "The inputs does not match with our records..Please retry..";
        delete this.response.errors;
        return this.response;
    };

    internalServerError(err) {
        console.error("err.stack");
        console.error(err.stack);
        if (err && err.name && err.name == 'ValidationError') {
            this.response.http_code = "500";
            this.response.message = "Internal Server Error..Please retry..";
            this.response.errors = (err.errors && err.errors.channel && err.errors.channel.message) ? err.errors.channel.message : (err.stack || err);
            return this.response;
        }
        this.response.http_code = "500";
        this.response.message = "Failure";
        this.response.result = "Internal Server Error..Please retry..";
        this.response.errors = err.errmsg || err.stack || err;
        return this.response;
    };

    makeResult(statusCode, message) {
        this.response.http_code = statusCode;
        this.response.message = (statusCode == "200" ? "Success" : "Failure");
        this.response.result = message;
        delete this.response.errors;
        return this.response;
    };

    makeSuccessResponse(result) {
        this.response.http_code = "200";
        this.response.message = "Success";
        this.response.result = result;
        delete this.response.errors;
        return this.response;
    };

    makeErrorResponse(err) {
        this.response.http_code = err.http_code || "400";
        this.response.message = "Failure";
        this.response.result = "Bad request / Server Error.. Please retry..";
        this.response.errors = err.stack || err;
        return this.response;
    };
}

module.exports = ResponseHandler;