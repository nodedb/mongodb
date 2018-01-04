/**
 * index
 */

/* Node modules */
const { EventEmitter } = require('events');
const path = require('path');

/* Third-party modules */
const { MongoClient } = require('mongodb');

/* Files */

module.exports = class MySQL {
    constructor (connection) {
        this.connectionData = connection;
    }

    connect () {
        const username = this.connectionData.user;
        const password = this.connectionData.password;
        const host = this.connectionData.host;
        const port = this.connectionData.port;

        const auth = username && password ? `${username}:${password}@` : '';

        return MongoClient.connect(`mongodb://${auth}${host}:${port}`);
    }

    disconnect (connection) {
        return connection.close();
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
        }, {
            label: 'PORT',
            key: 'port',
            type: 'number',
            default: 27017,
            required: true
        }, {
            label: 'USERNAME',
            key: 'username',
            type: 'text',
        }, {
            label: 'PASSWORD',
            key: 'password',
            type: 'password',
        }];
    }

    static get displayType () {
        return 'document';
    }

    static get logo () {
        return path.join(__dirname, 'logo.png');
    }

    static get name () {
        return 'MongoDB';
    }
};
