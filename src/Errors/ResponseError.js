export default class ResponseError {
    constructor(message, response) {
        this.name = 'ResponseError';
        this.message = message;
        this.response = response;
        this.stack = (new Error()).stack;
    }

    toString() {
        return this.message;
    }

    getResponse() {
        return this.response;
    }
}
