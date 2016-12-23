/**
 * mongodb
 */

"use strict";


/* Node modules */
const fs = require("fs");


/* Third-party modules */


/* Files */


module.exports = angular => {

    const module = "nodedb-mongodb";
    const app = angular.module(module, []);

    app
        .controller(`${module}.DbConnectionCtrl`, function (currentConnection) {

            this.eg = "some input";

        })
        .factory(`${module}.dbConnectionResolve`, () => currentConnection => {

            console.log("@todo");

        })
        .factory(`${module}.dbConnectionTpl`, () => fs.readFileSync(`${__dirname}/views/dbConnection.html`))
        .factory(`${module}.strategy`, require("./lib/strategy"))
        .factory(`${module}.connectForm`, ($translate) => {

            return {
                type: "object",
                properties: {
                    url: {
                        default: "mongodb://localhost",
                        required: true,
                        title: $translate.instant("DB.URL"),
                        type: "string"
                    }
                }
            };

        });

    return {
        app,
        module
    };

};