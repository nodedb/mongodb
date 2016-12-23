/**
 * strategy
 */

"use strict";


/* Node modules */
const path = require("path");


/* Third-party modules */
const MongoClient = require("mongodb").MongoClient;


/* Files */


module.exports = function () {

    return class MongoDB {

        constructor (params) {
            this._params = params;
        }

        get icon () {
            return this._assetPath("img", "logo.png");
        }

        _assetPath (...args) {
            return path.join(__dirname, "..", "assets", ...args);
        }

        close () {
            return this._connection.close();
        }

        connect () {
            return MongoClient.connect(this._params.url)
                .then(db => {
                    this._connection = db;

                    return db;
                });
        }

    }

};