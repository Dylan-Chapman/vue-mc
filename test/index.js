/**
 * Tests
 */

// Fail if there's an unhandled promise rejection warning.
process.on('unhandledRejection', (error, promise) => {
    throw error;
});

// Structures
import './Structures/Model.spec.js';
import './Structures/Collection.spec.js';

// Validation
import './Validation/Rule.spec.js';
import './Validation/Rules.spec.js';
import './Validation/Messages.spec.js';

// HTTP
import './HTTP/ProxyResponse.spec.js';

// Errors
import './Errors/RequestError.spec.js';
import './Errors/ResponseError.spec.js';
import './Errors/ValidationError.spec.js';
