import { get as _get } from 'lodash'

class Response {
    constructor(response) {
        this.response = response;
    }

    getData() {
        return _get(this.response, 'data', null);
    }

    getStatus() {
        return _get(this.response, 'status');
    }

    getHeaders() {
        return _get(this.response, 'headers', {});
    }

    getValidationErrors() {
        return _get(this.response, 'data', null);
    }
}

export default Response;
