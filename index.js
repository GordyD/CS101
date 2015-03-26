/**
 * Use Babel to transpile ES6 to ES5
 */
require('babel/register');

var Graph = require('./lib/structures/Graph');


try {
  var g = new Graph();
  g.addVertex('A');
} catch (e) {
  console.log(e);
}