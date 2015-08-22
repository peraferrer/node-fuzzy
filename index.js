/**
 * Created by german.peraferrer on 8/21/2015.
 */

var fuzzy = require('./lib/node-fuzzy');

// Test
var example = [{
    name: 'German',
    language: [{
        name: 'Jevscript',
        expertise: 8
    }, {
        name: 'Node.js',
        expertise: 7
    }]
}, {
    name: 'Diego',
    language: [{
        name: 'HTML',
        expertise: 9
    }, {
        name: 'CSS',
        expertise: 10
    }]
}];

// Return first object of array "example"
console.log(fuzzy.search(example, /Node/));