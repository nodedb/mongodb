/**
 * strategy
 */

"use strict";


/* Node modules */
const path = require("path");


/* Third-party modules */
const MongoClient = require("mongodb").MongoClient;


/* Files */


module.exports = function (Strategy) {

    return class MongoDB extends Strategy {

        get icon () {
            return this._assetPath("img", "logo.png");
        }

        _assetPath (...args) {
            return path.join(__dirname, "..", "assets", ...args);
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