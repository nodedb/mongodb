/**
 * strategy
 */

"use strict";


/* Node modules */


/* Third-party modules */
const _ = require("lodash");


/* Files */


function Strategy () {

}


_.extend(Strategy.prototype, {});


_.extend(Strategy, {


    connectForm: {
        type: "object",
        properties: {
            host2: {
                type: "string"
            }
        }
    }


});


exports.Strategy = Strategy;
