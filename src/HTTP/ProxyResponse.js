import {
    defaultTo as _defaultTo,
    toSafeInteger as _toSafeInteger,
} from 'lodash'

export default class ProxyResponse {
    constructor(status, data = {}, headers = {}) {
        this.data = _defaultTo(data, {});
        this.headers = _defaultTo(headers, {});
        this.status = _toSafeInteger(status);
    }

    getData() {
        return this.data;
    }

    getStatus() {
        return this.status;
    }

    getHeaders() {
        return this.headers;
    }

    getValidationErrors() {
        return this.data;
    }
}
