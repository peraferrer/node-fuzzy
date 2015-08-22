/**
 * Created by german.peraferrer on 8/21/2015.
 */

/**
 * Regular Expresion IndexOf for Arrays
 * This little addition to the Array prototype will iterate over array
 * and return the index of the first element which matches the provided
 * regular expresion.
 * Note: This will not match on objects.
 *
 * @param  {RegEx}   rx The regular expression to test with. E.g. /-ba/gim
 * @return {number} -1 means not found
 */
Array.prototype.regIndexOf = function (rx) {
    for (var i in this) {
        if (this[i].toString().match(rx)) {
            return i;
        }
    }
    return -1;
};

/**
 * Fuzzy Search in a Collection
 *
 * @param arrObj Array Object
 * @param search Regex that represents what is going to be searched
 * @return {Array} ArrayObject with an object of what we are looking for
 */
exports.search = function(arrObj, search) {

    var _ = require('underscore');

    var _return = [];
    /**
     * Runs deep the object, to his last nodes and returns an array with all the values.
     *
     * @param object Object that is going to be analized
     * @return {Array} with all the values of the object at the same level
     */
    var recursive = function(object) {
        return _.map(object, function (obj, key) {
            if (typeof obj !== 'object') {
                return obj.toString();
            } else {
                return recursive(obj);
            }
        });
    };
    // Search inside the flatten array which was returned by recursive
    _.each(recursive(arrObj), function (obj, key) {
        if (obj.regIndexOf(search) > -1) {
            _return.push(arrObj[key]);
        }
    }, this);
    return _return;
};