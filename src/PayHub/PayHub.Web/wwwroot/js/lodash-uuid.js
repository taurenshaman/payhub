(function () {
    var isNode = typeof module !== 'undefined' &&
            typeof module.exports !== 'undefined',
        _;
    if (isNode) {
        _ = require('lodash').runInContext();
    }
    else {
        // browser environment
        _ = window._;
    }

    var mixins = (function () {
        var extendWith = {};

        /**
         * _.uuid
         *
         * Usage:
         *    _.uuid()
         * Produces:
         *    '9716498c-45df-47d2-8099-3f678446d776'
         *
         * Generates an RFC 4122 version 4 uuid
         * @see http://stackoverflow.com/a/8809472
         * @returns {String} the generated uuid
         */
        extendWith.uuid = function () {
            var d = _.now();
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + _.random(16)) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        };

        extendWith.plainUUID = function () {
            var id = extendWith.uuid();
            return id.replace(/-/g, '');
        };

        /**
         * _.isUuid4
         *
         * Usage:
         *    _.isUuid4(_.uuid())
         * Produces:
         *    true|false
         *
         * Validates a version 4 uuid string
         * @param {String} uuid - the uuid under test
         * @returns {Boolean} true if the uuid under test is a valid uuid
         **/
        extendWith.isUuid4 = function (uuid) {
            var re = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            return re.test(uuid);
        };

        /**
         * _.isUuid
         *
         * Usage:
         *    _.isUuid(_.uuid())
         * Produces:
         *    true|false
         *
         * Validates any version uuid string
         * @param {String} uuid - the uuid under test
         * @returns {Boolean} true if the uuid under test is a valid uuid
         **/
        extendWith.isUuid = function (uuid) {
            var re = /^([a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}?)$/i;
            return re.test(uuid);
        };

        extendWith.plainUUID = function () {
            let uuid = extendWith.uuid();
            return uuid.replace(/-/g, '');
        };

        /**
         * _.compactObject
         *
         * Usage:
         *    var obj = {a: false, b: 3, c: ''};
         *    _.compactObject(obj)
         * Produces:
         *    {b: 3}
         *
         * Removes properties from an object where the value is falsy.
         * Like _.compact but for objects
         * @param {Object} obj - the object to remove falsy properties from
         * @returns {Object} the object with falsy properties removed
         **/

        return extendWith;
    })();

    /**
     * bootstrap mixins for node and the browser
     * For the browser: lodash must be explicitly included above
     *    this library
     * For node: this library will wrap lodash so there is no
     *    need to include lodash
     */
    if (isNode) {
        _.mixin(mixins, {'chain': true});
        module.exports = _;
    }
    else {
        // browser environment
        if (typeof _ === 'function') {
            _.mixin(mixins, {'chain': true});
        }
        else {
            throw new Error('lodash must be included before lodash-extensions.');
        }
    }
})();
