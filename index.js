/**
 * index
 */

/* Node modules */
const { EventEmitter } = require('events');
const path = require('path');

/* Third-party modules */
const mysql = require('mongodb');

/* Files */

module.exports = class MySQL {
    constructor ({ host, password, port, user }) {
    }

    connect () {
    }

    disconnect (connection) {
    }

    query (query, { db = null, values = [] } = {}) {
    }

    static get connection () {
        return [{
            label: 'HOST',
            key: 'host',
            type: 'text',
            default: 'localhost',
            required: true
        }];
    }

    static get logo () {
        return path.join(__dirname, 'logo.png');
    }

    static get name () {
        return 'MongoDB';
    }
};
